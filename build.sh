#!/bin/bash
echo "= Build"

function error {
	echo
	echo "# $1"
	exit -1
}

NODE_BUILD="`command -v npm`"
[ -z "$NODE_BUILD" ] && NODE_BUILD="docker run -it --rm -v $PWD:/app -w /app node npm"
$NODE_BUILD run build || error "Build failed."

DIST_DIR=dist
DIST_ZIP=dist-app.zip

[ -f $DIST_ZIP ] && rm -f $DIST_ZIP
[ -f $DIST_ZIP ] && error "Error deleting file '$DIST_ZIP'."

zip -9r $DIST_ZIP $DIST_DIR

echo
echo "- Build completed."
