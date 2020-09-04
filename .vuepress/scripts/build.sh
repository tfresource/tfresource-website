#!/usr/bin/env bash
set -e

node scripts/acronym-builder.js
yarn install
yarn build

