#!/usr/bin/env bash
set -e

node .vuepress/scripts/acronym-builder.js
yarn install
yarn build

