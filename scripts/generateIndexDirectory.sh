#! /usr/bin/env bash 
ROOT=$(pwd)

cd $ROOT/docs

VERSION_DIRECTORIES=$(ls -d */ | sed 's/\///')
LINKS="";

for VERSION in $VERSION_DIRECTORIES
do
  LINKS="$LINKS<a href='$VERSION'>$VERSION</a><br/>"
done

cat > index.html <<EOF
<!doctype html>
<html>
<head>
    <title>@wordpress/components by version</title>
</head>

<body>
    $LINKS
</body>

</html>
EOF

cd $ROOT