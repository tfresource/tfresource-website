#!/usr/bin/env bash
set -e

npm i -g vuepress

vuepress build

export SITE=`mktemp -d`
export TIMESTAMP=`date` 

mv .vuepress/dist/* $SITE
git checkout gh-pages
rm -rf *
mv $SITE/* .

git add .
git commit -m "Build: $TIMESTAMP"

git checkout master

