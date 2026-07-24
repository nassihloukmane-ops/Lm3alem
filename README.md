# Lm3alem

Site Next.js (export statique) — https://lm3alem.com

## Repo GitHub

[nassihloukmane-ops/Lm3alem](https://github.com/nassihloukmane-ops/Lm3alem)

```bash
git add .
git commit -m "message"
git push origin main
```

## Déploiement (Hostinger sans Node en SSH)

Sur ton serveur, `node` n’est pas dans le PATH SSH — c’est normal.  
**Build sur ton PC**, puis upload :

```powershell
npm run deploy:remote
```

Ça lance : `build:hostinger` → `scp` vers `~/domains/lm3alem.com/public_html/`

Paramètres SSH (déjà préremplis d’après ton accès) :

| Variable | Défaut |
|----------|--------|
| `HOSTINGER_HOST` | `82.25.113.135` |
| `HOSTINGER_USER` | `u468433973` |
| `HOSTINGER_PORT` | `65002` |
| `HOSTINGER_PUBLIC_HTML` | `domains/lm3alem.com/public_html` |

Si le chemin `public_html` est différent, en SSH :

```bash
ls ~/domains/
```

puis :

```powershell
$env:HOSTINGER_PUBLIC_HTML = "domains/TON-DOMAINE/public_html"
npm run deploy:remote
```

## Si tu actives Node.js dans hPanel

Alors le script serveur fonctionne :

```bash
cd ~/Lm3alem
export PUBLIC_HTML="$HOME/domains/lm3alem.com/public_html"
bash scripts/deploy.sh
```

## Scripts

| Commande | Rôle |
|----------|------|
| `npm run deploy:remote` | **Recommandé** — build PC + upload SSH |
| `npm run build:hostinger` | Build seul (`out/` + zip) |
| `bash scripts/deploy.sh` | Pull + build + publish (nécessite Node serveur) |
