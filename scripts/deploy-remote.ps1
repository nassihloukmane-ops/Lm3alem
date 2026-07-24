# Deploy Windows -> Hostinger (build local + zip + ssh unzip)
# Usage: npm run deploy:remote
# Optional env: HOSTINGER_HOST, HOSTINGER_USER, HOSTINGER_PORT, HOSTINGER_PUBLIC_HTML

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

$HostName = if ($env:HOSTINGER_HOST) { $env:HOSTINGER_HOST } else { "82.25.113.135" }
$User = if ($env:HOSTINGER_USER) { $env:HOSTINGER_USER } else { "u468433973" }
$Port = if ($env:HOSTINGER_PORT) { $env:HOSTINGER_PORT } else { "65002" }
$RemoteHtml = if ($env:HOSTINGER_PUBLIC_HTML) {
  $env:HOSTINGER_PUBLIC_HTML
} else {
  "domains/lm3alem.com/public_html"
}

$ZipLocal = Join-Path $Root "lm3alem-public_html.zip"
$ZipRemote = "Lm3alem/lm3alem-public_html.zip"
$SshTarget = "${User}@${HostName}"

Write-Host "==> Build Hostinger (local)"
npm run build:hostinger
if ($LASTEXITCODE -ne 0) {
  throw "build:hostinger failed (exit $LASTEXITCODE). Upload cancelled."
}

if (-not (Test-Path "out\index.html")) {
  throw "Missing out/index.html after build."
}
if (-not (Test-Path "out\next")) {
  throw "Missing out/next - pack-hostinger did not rename _next. Upload cancelled."
}
if (Test-Path "out\_next") {
  throw "out/_next still exists - Hostinger would block it. Upload cancelled."
}
if (-not (Test-Path $ZipLocal)) {
  throw "Missing lm3alem-public_html.zip after pack."
}

Write-Host "==> Upload zip -> ${SshTarget}:~/${ZipRemote} (port $Port)"
& scp -P $Port -o "StrictHostKeyChecking=accept-new" $ZipLocal "${SshTarget}:~/${ZipRemote}"
if ($LASTEXITCODE -ne 0) {
  throw "scp zip failed (exit $LASTEXITCODE)."
}

# Empty public_html, unzip, fix permissions (Hostinger needs 755/644), verify
$RemoteCmd = "set -e; PUB=`$HOME/$RemoteHtml; ZIP=`$HOME/$ZipRemote; test -f `$ZIP; test -d `$PUB; find `$PUB -mindepth 1 -maxdepth 1 -exec rm -rf {} +; unzip -o `$ZIP -d `$PUB; chmod 755 `$PUB; find `$PUB -type d -exec chmod 755 {} +; find `$PUB -type f -exec chmod 644 {} +; test -f `$PUB/index.html; test -d `$PUB/next; test ! -d `$PUB/_next; ls `$PUB/next/static/css/; echo DEPLOY_OK"

Write-Host "==> Extract on server into ~/$RemoteHtml"
& ssh -p $Port -o "StrictHostKeyChecking=accept-new" $SshTarget $RemoteCmd
if ($LASTEXITCODE -ne 0) {
  throw "remote unzip failed (exit $LASTEXITCODE)."
}

Write-Host "==> Deploy done -> https://lm3alem.com"
