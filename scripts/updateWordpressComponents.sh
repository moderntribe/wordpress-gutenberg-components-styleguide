#! /usr/bin/env bash

echo "Updating @wordpress/components"
npm install -S @wordpress/components@latest

LATEST_VERSION=$(grep @wordpress/components package.json | grep -o "[0-9]*\.[0-9]*\.[0-9]*" | head)

echo "Tagging as $LATEST_VERSION"
git tag -f $LATEST_VERSION
