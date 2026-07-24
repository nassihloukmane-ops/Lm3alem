#!/usr/bin/env bash
# Déploiement Hostinger depuis GitHub
#
# Deux modes :
#   1) Avec Node (rare en SSH Hostinger) → pull + build + publish
#   2) Sans Node → publish-only si out/ existe, sinon message clair
#
# Usage serveur :
#   export PUBLIC_HTML="$HOME/domains/lm3alem.com/public_html"
#   bash scripts/deploy.sh
#
# Recommandé si Node absent (ton cas) — depuis Windows :
#   npm run deploy:remote

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BRANCH="${BRANCH:-main}"
PUBLIC_HTML="${PUBLIC_HTML:-$HOME/domains/lm3alem.com/public_html}"

echo "==> Repo : $ROOT"
echo "==> Branche : $BRANCH"

# --- Localiser Node (chemins Hostinger fréquents) ---
find_node() {
  if command -v node >/dev/null 2>&1; then
    command -v node
    return 0
  fi
  local candidates=(
    "$HOME/.nvm/nvm.sh"
    "$HOME/nodevenv"
  )
  if [[ -f "$HOME/.nvm/nvm.sh" ]]; then
    # shellcheck disable=SC1090
    source "$HOME/.nvm/nvm.sh"
    if command -v node >/dev/null 2>&1; then
      command -v node
      return 0
    fi
  fi
  # Hostinger Node Selector : ~/nodevenv/<app>/<version>/bin/node
  local found
  found="$(find "$HOME/nodevenv" -type f -name node 2>/dev/null | head -n 1 || true)"
  if [[ -n "$found" && -x "$found" ]]; then
    echo "$found"
    return 0
  fi
  return 1
}

NODE_BIN=""
if NODE_BIN="$(find_node)"; then
  export PATH="$(dirname "$NODE_BIN"):$PATH"
  echo "==> Node trouvé : $(node -v) ($NODE_BIN)"
else
  echo "==> Node.js introuvable en SSH (normal sur beaucoup d’hébergements Hostinger)."
  echo ""
  echo "Déploie depuis ton PC (recommandé) :"
  echo "  npm run deploy:remote"
  echo ""
  echo "Ou active Node dans hPanel → Sites → Node.js, puis relance ce script."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [[ "$NODE_MAJOR" -lt 20 ]]; then
  echo "ERROR: Node $NODE_MAJOR détecté — il faut Node 20–22."
  exit 1
fi

if [[ "${SKIP_PULL:-0}" != "1" ]]; then
  echo "==> git fetch + pull"
  git fetch origin "$BRANCH"
  git pull --ff-only origin "$BRANCH"
fi

echo "==> npm ci"
npm ci

echo "==> Build Hostinger"
npm run build:hostinger

if [[ ! -f "$ROOT/out/index.html" ]]; then
  echo "ERROR: out/index.html manquant après le build."
  exit 1
fi

bash "$ROOT/scripts/publish-static.sh"
echo "==> Déploiement terminé."
