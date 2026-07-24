# Lm3alem

Site Next.js (export statique) — https://lm3alem.com

## Repo GitHub

Déjà lié à : [nassihloukmane-ops/Lm3alem](https://github.com/nassihloukmane-ops/Lm3alem)

```bash
# En local (Windows)
git add .
git commit -m "message"
git push origin main
```

## Déploiement Hostinger (recommandé)

`git pull` seul ne met **pas** le site à jour : il faut **rebuild** `out/` puis publier.

### Une fois (configuration serveur)

En SSH Hostinger :

```bash
cd ~/Lm3alem   # ou le chemin réel du clone

# Chemin typique Hostinger — adapte si besoin :
export PUBLIC_HTML="$HOME/domains/lm3alem.com/public_html"
echo 'export PUBLIC_HTML="$HOME/domains/lm3alem.com/public_html"' >> ~/.bashrc
```

Si tu utilises **Node.js Hostinger** (`app.js` sert `out/`), tu n’as **pas** besoin de `PUBLIC_HTML` : le build suffit, puis redémarre l’app dans hPanel.

### À chaque mise en ligne

```bash
cd ~/Lm3alem
bash scripts/deploy.sh
```

Ce script fait : `git pull` → `npm ci` → `npm run build:hostinger` → sync vers `PUBLIC_HTML` (si défini).

### Workflow quotidien

1. Tu codes en local → `git push origin main`
2. Sur le serveur → `bash scripts/deploy.sh`
3. Le site https://lm3alem.com est à jour

## Scripts npm

| Commande | Rôle |
|----------|------|
| `npm run dev` | Dev local |
| `npm run build` | Build Next (`out/`) |
| `npm run build:hostinger` | Build + rename `_next`→`next` + zip |
| `bash scripts/deploy.sh` | Pull GitHub + build + publish Hostinger |

## CI GitHub

À chaque push sur `main`, GitHub Actions vérifie que le build Hostinger réussit (`.github/workflows/ci.yml`).
