#!/usr/bin/env bash
# Publication Hostinger SANS Node (copie out/ → public_html)
# Sur le serveur, après un upload de out/ OU depuis un build CI.
#
# Usage :
#   export PUBLIC_HTML="$HOME/domains/lm3alem.com/public_html"
#   bash scripts/publish-static.sh
#
# Ou avec un dossier source custom :
#   OUT_DIR=/chemin/vers/out bash scripts/publish-static.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="${OUT_DIR:-$ROOT/out}"
PUBLIC_HTML="${PUBLIC_HTML:-$HOME/domains/lm3alem.com/public_html}"

if [[ ! -f "$OUT_DIR/index.html" ]]; then
  echo "ERROR: $OUT_DIR/index.html introuvable."
  echo "Sur Hostinger SSH, Node n'est souvent pas dispo."
  echo "Build en local puis lance : npm run deploy:remote"
  exit 1
fi

if [[ ! -d "$PUBLIC_HTML" ]]; then
  echo "ERROR: PUBLIC_HTML introuvable : $PUBLIC_HTML"
  echo "Cherche le bon chemin :"
  echo "  ls -la \$HOME/domains/"
  exit 1
fi

echo "==> Sync $OUT_DIR/ → $PUBLIC_HTML/"
rsync -a --delete \
  --exclude ".git" \
  --exclude ".well-known" \
  --exclude "cgi-bin" \
  "$OUT_DIR/" "$PUBLIC_HTML/"

echo "==> Publié. Vérifie https://lm3alem.com"
