#! /usr/bin/env bash 

if [ ! -L $(pwd)/src/components ]; then
    ln -sf $(pwd)/node_modules/@wordpress/components/src $(pwd)/src/components
fi
