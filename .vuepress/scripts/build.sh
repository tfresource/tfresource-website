#!/usr/bin/env bash
set -e

SOURCE_BRANCH=source
BUILD_BRANCH=master

yarn install
yarn build

export SITE=`mktemp -d`
export TIMESTAMP=`date`

# SURGE:
# ------
# surge -d https://tfresource.surge.sh .vuepress/dist

# GITHUB-PAGES:
# -------------
#mv .vuepress/dist/* $SITE
#git checkout -b $BUILD_BRANCH
#rm -rf *
#mv $SITE/* .
#
#git add .
#git commit -m "Build: $TIMESTAMP"
#
#git checkout $SOURCE_BRANCH

