#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# build list of latest changes
cd topics
for each in *; do echo `git log -1 --pretty="%as,%aN" $each`,$each; done | sort -rs > ../.vuepress/public/latest-changes.csv
cd ..

node .vuepress/scripts/acronym-builder.js
yarn install
yarn build

