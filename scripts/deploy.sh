#!/bin/bash
# Nasadenie dusantatransky.sk na Cloudflare.
#
# 1. Zbuilduje web (Gatsby 2 potrebuje Node 14; na Apple Silicon beží cez Rosettu).
# 2. Hotové súbory nahrá do vetvy `cloudflare` na GitHube.
# 3. Cloudflare Worker `dusantatransky-sk` ich do minúty zverejní na www.dusantatransky.sk.
#
# Použitie (z koreňa repozitára, na vetve master, všetko commitnuté):
#   bash scripts/deploy.sh
set -e

REPO_URL="https://github.com/Busho-san/dusantatransky-sk.git"
NODE_VER="v14.21.3"
CACHE="$HOME/.cache/dusantatransky-sk"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ -n "$(git status --porcelain)" ]; then
  echo "Najprv commitni zmeny (git status nie je čistý)."
  exit 1
fi

# Node 14 (x64 build, beží aj na Apple Silicon cez Rosettu)
NODE_DIR="$CACHE/node-$NODE_VER-darwin-x64"
if [ ! -x "$NODE_DIR/bin/node" ]; then
  mkdir -p "$CACHE"
  curl -sSL "https://nodejs.org/dist/$NODE_VER/node-$NODE_VER-darwin-x64.tar.gz" | tar xz -C "$CACHE"
fi
NODE="$NODE_DIR/bin/node"
RUN="arch -x86_64"
if [ "$(uname -m)" != "arm64" ]; then RUN=""; fi
export PATH="$NODE_DIR/bin:$PATH"

YARN="$NODE_DIR/lib/node_modules/yarn/bin/yarn.js"
if [ ! -f "$YARN" ]; then
  $RUN "$NODE" "$NODE_DIR/lib/node_modules/npm/bin/npm-cli.js" i -g yarn@1.22.19 >/dev/null
fi

if [ ! -d node_modules ]; then
  $RUN "$NODE" "$YARN" install --frozen-lockfile --ignore-engines
fi

rm -rf .cache public
GATSBY_TELEMETRY_DISABLED=1 $RUN "$NODE" node_modules/.bin/gatsby build
if grep -q 'dusantatransky-sk/' public/index.html; then
  echo "Build obsahuje prefix cesty, prerušené."
  exit 1
fi

SRC=$(git rev-parse --short HEAD)
AUTHOR_NAME=$(git config user.name)
AUTHOR_EMAIL=$(git config user.email)
TMP=$(mktemp -d)
cd "$TMP"
git init -q -b cloudflare
git config user.name "$AUTHOR_NAME"
git config user.email "$AUTHOR_EMAIL"
git fetch -q "$REPO_URL" cloudflare && git checkout -q -B cloudflare FETCH_HEAD || true

rm -rf site
mkdir site
cp -R "$ROOT/public/." site/
rm -f site/webpack.stats.json site/*.map
cp "$ROOT/scripts/wrangler.jsonc" wrangler.jsonc
cat > README.md <<'MD'
# dusantatransky.sk – produkčný build

Táto vetva obsahuje iba hotový web (priečinok `site/`), ktorý zverejňuje
Cloudflare Worker `dusantatransky-sk` cez `npx wrangler deploy`.
Zdrojový kód je vo vetve `master`. Needitovať ručne, generuje ju `scripts/deploy.sh`.
MD

git add -A
git commit -q -m "Produkčný build z master ($SRC)" || echo "Žiadne zmeny vo výsledku."
git push -q "$REPO_URL" cloudflare
cd "$ROOT"
rm -rf "$TMP"
echo "Nasadené: build z $SRC je vo vetve cloudflare. Cloudflare ho zverejní do minúty."
