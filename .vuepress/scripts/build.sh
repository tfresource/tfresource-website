#!/usr/bin/env bash
set -e

npm i

npm run build

export SITE=`mktemp -d`
export TIMESTAMP=`date`

# SURGE:
# ------
surge -d https://tfresource.surge.sh .vuepress/dist

# GITHUB-PAGES:
# -------------
mv .vuepress/dist/* $SITE
git checkout -b gh-pages
rm -rf *
mv $SITE/* .

git add .
git commit -m "Build: $TIMESTAMP"

git checkout master

