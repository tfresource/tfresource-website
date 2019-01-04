#!/usr/bin/env bash
set -e

npm i -g vuepress
npm i -g surge

vuepress build

export SITE=`mktemp -d`
export TIMESTAMP=`date` 

# SURGE:
# ------
surge -d tfresource.surge.sh .vuepress/dist

# GITHUB-PAGES:
# -------------
mv .vuepress/dist/* $SITE
git checkout -b gh-pages
rm -rf *
mv $SITE/* .

git add .
git commit -m "Build: $TIMESTAMP"

git checkout master

