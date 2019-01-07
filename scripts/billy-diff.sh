#!/usr/bin/env bash
set -eu

Here=$(dirname "$0")
PATH="$Here:$PATH" # add this directory to PATH for markdown-format-wdiff

git diff ${GIT_DIFF_OPTS:-} --word-diff --patch-with-stat \
    --minimal --find-renames --patience \
    $1 $2 "$3" |
sed 's/<img/&lt;img/g' |
sed 's/<ins/xxINSxx/g' |
sed 's/<del/xxDELxx/g' |
sed 's/<\/ins/xxENDINSxx/g' |
sed 's/<\/del/xxENDDELxx/g' |
sed 's/</&lt;/g' |
sed 's/xxINSxx/<ins/g' |
sed 's/xxDELxx/<del/g' |
sed 's/xxENDINSxx/<\/ins/g' |
sed 's/<xxENDDELxx/\/del/g' |
sed '
    # format prologue
    1,/^diff /{
        /^diff/! s/^.*//
    }

    # format file headers
    /^diff /,/^+++ /{
        /^diff /{
            s|^diff .* \([^/]/\)\(.*\)|<div class="file-start"><code>\2</code></div>|
            a\
    \

        }
        /^<div class="file-start">/! s/^.*//
    }

    # format hunks
    /^@@ -.* +.* @@/{
        s| @@.*| @@|
        s|^|<div class="hunk-start"><code>|
        s|$|</code></div>\n|
    }
' |
markdown-format-wdiff
