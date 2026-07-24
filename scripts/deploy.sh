#!/usr/bin/env bash
# Déploiement Hostinger depuis GitHub
# Usage (sur le serveur) :
#   cd ~/Lm3alem && bash scripts/deploy.sh
#
# Variables optionnelles :
#   PUBLIC_HTML  → dossier public_html à synchroniser (hébergement Apache)
#                  Ex. : export PUBLIC_HTML="$HOME/domains/lm3alem.com/public_html"
#   BRANCH       → branche Git (défaut : main)
#   SKIP_PULL=1  → ne pas faire git pull (build local uniquement)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BRANCH="${BRANCH:-main}"

echo "==> Repo : $ROOT"
echo "==> Branche : $BRANCH"

if [[ "${SKIP_PULL:-0}" != "1" ]]; then
  echo "==> git fetch + pull"
  git fetch origin "$BRANCH"
  git pull --ff-only origin "$BRANCH"
fi

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js introuvable. Active Node 20+ dans hPanel Hostinger."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [[ "$NODE_MAJOR" -lt 20 ]]; then
  echo "ERROR: Node $NODE_MAJOR détecté — il faut Node 20–22 (voir package.json engines)."
  exit 1
fi

echo "==> Node $(node -v) / npm $(npm -v)"
echo "==> npm ci"
npm ci

echo "==> Build Hostinger (next build + pack)"
npm run build:hostinger

if [[ ! -f "$ROOT/out/index.html" ]]; then
  echo "ERROR: out/index.html manquant après le build."
  exit 1
fi

if [[ -n "${PUBLIC_HTML:-}" ]]; then
  if [[ ! -d "$PUBLIC_HTML" ]]; then
    echo "ERROR: PUBLIC_HTML n'existe pas : $PUBLIC_HTML"
    exit 1
  fi
  echo "==> Sync out/ → $PUBLIC_HTML"
  # Ne pas effacer des dossiers système Hostinger éventuels
  rsync -a --delete \
    --exclude ".git" \
    --exclude ".well-known" \
    --exclude "cgi-bin" \
    "$ROOT/out/" "$PUBLIC_HTML/"
  echo "==> Site publié dans public_html"
else
  echo "==> Build prêt dans out/"
  echo "    • Si Hostinger Node (app.js) : redémarre l'app Node dans hPanel."
  echo "    • Si Apache/static : exporte PUBLIC_HTML puis relance :"
  echo "      export PUBLIC_HTML=\"\$HOME/domains/lm3alem.com/public_html\""
  echo "      bash scripts/deploy.sh"
fi

echo "==> Déploiement terminé."
