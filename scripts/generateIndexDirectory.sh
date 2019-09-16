#! /usr/bin/env bash
ROOT=$(pwd)

cd $ROOT/docs

VERSION_DIRECTORIES=$(ls -d */ | sed 's/\///')
LINKS="";

for VERSION in $VERSION_DIRECTORIES
do
  LINKS="$LINKS* [$VERSION]($VERSION)"$'\n'
done


cat > index.md <<EOF
## @wordpress/components by version
$LINKS
EOF

cd $ROOT