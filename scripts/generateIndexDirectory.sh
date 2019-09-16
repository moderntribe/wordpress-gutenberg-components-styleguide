#! /usr/bin/env bash 
ROOT=$(pwd)

cd $ROOT/docs

VERSION_DIRECTORIES=$(ls -d */ | sed 's/\///')
LINKS="";

for VERSION in $VERSION_DIRECTORIES
do
  LINKS="$LINKS"$'\n'"* [$VERSION]($VERSION)"
done


cat > index.md <<EOF
## @wordpress/components by version
$LINKS
EOF

cd $ROOT