#! /usr/bin/env bash

LATEST_VERSION=$(grep @wordpress/components package.json | grep -o "[0-9]*\.[0-9]*\.[0-9]*" | head)

echo "Tagging as $LATEST_VERSION"
git tag -f $LATEST_VERSION
git push -f origin $LATEST_VERSION