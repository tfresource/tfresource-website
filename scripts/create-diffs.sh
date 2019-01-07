#!/usr/bin/env bash
#set -e

cd src

export TIMESTAMP=`date`

# filenames can have spaces, hence this weird thing
find . -name "*.md" -print | while read f; do
  echo
  echo "- diffing: $f"

  # create the diff folder tree
  mkdir -p diff/$(dirname "$f")

  # Set COMMIT to blank
  COMMIT=''

  # File Front matter
  printf "# Page history: $f\n" >> "diff/$f"

  # list the commits which touched this file
  # 0:commit 1:author 2:email 3:date 4:message
  git log "--pretty=format:%H}%an}%ae}%aD}%s" --follow -- "$f" | \
  while read glog; do
    # Split the line using crazy IFS bash thing https://stackoverflow.com/questions/918886/how-do-i-split-a-string-on-a-delimiter-in-bash
    IFS='}' read -ra FIELDS <<< "$glog"
    echo ${FIELDS[0]} - ${FIELDS[4]}

    # 0th run: just save the commit deets for the next iter of the loop
    if [[ -z $COMMIT ]]; then
      COMMIT=${FIELDS[0]}
      AUTHOR=${FIELDS[1]}
      EMAIL=${FIELDS[2]}
      DATE=${FIELDS[3]}
      MSG=${FIELDS[4]}
      continue
    fi

    # we're using the PREVIOUS fields because the lines come in from most recent -> oldest.
    printf "\n<h3 style=\"margin-left:-30px; padding-left: 30px; background-color: #bce; border-top: 10px solid green;padding-top: 5px;margin-top: 50px;\">" >> "diff/$f"
    printf "$DATE, $AUTHOR<br/>$MSG</h3>\n" >> "diff/$f"

    # run the markdown-diff script - from http://netj.github.io/markdown-diff/
    ../scripts/billy-diff.sh ${FIELDS[0]} $COMMIT "$f" >> "diff/$f"

    echo  >> "diff/$f"

    COMMIT=${FIELDS[0]}
    AUTHOR=${FIELDS[1]}
    EMAIL=${FIELDS[2]}
    DATE=${FIELDS[3]}
    MSG=${FIELDS[4]}
  done

  # First commit! List file contents raw
  printf "\n<h3 style=\"margin-left:-30px; padding-left: 30px; background-color: #bce; border-top: 10px solid green;padding-top: 5px;margin-top: 50px;\">" >> "diff/$f"
  printf "Initial<br/>commit&nbsp;</h3>\n" >> "diff/$f"
  git show "$COMMIT:$f" >> "diff/$f"

done

