#!/bin/bash

PR_NUMBER="$1"
BRANCH_NAME="$2"

git fetch origin $PR_NUMBER:$BRANCH_NAME
git checkout $BRANCH_NAME
