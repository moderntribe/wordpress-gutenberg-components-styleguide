#! /usr/bin/env bash 

ROOT=$(pwd)

echo $ROOT

# Module not found: Can't resolve '../my-icon-component' in 'node_modules/@wordpress/components/src/icon'
mkdir -p $ROOT/node_modules/@wordpress/components/src/icon/../my-icon-component
touch $ROOT/node_modules/@wordpress/components/src/icon/../my-icon-component/index.js

# Module not found: Can't resolve './Content' in 'node_modules/@wordpress/components/src/popover'
touch $ROOT/node_modules/@wordpress/components/src/popover/Content.js