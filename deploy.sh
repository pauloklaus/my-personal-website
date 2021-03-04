#!/bin/bash
echo "= Deploy"

function error {
	echo
	echo "# $1"
	exit -1
}

DIST_DIR=dist
DIST_ZIP=dist-app.zip

[ ! -f $DIST_ZIP ] && error "File '$DIST_ZIP' not found."

CONFIG=deploy.conf

[ ! -f $CONFIG ] && error "File '$CONFIG' not found."

. ./$CONFIG

ping -c1 $REMOTE_HOST \
	|| error "Server unreachable '$REMOTE_HOST'."

ssh $REMOTE_USER@$REMOTE_HOST "[ -f $REMOTE_DIR/$DIST_ZIP ] && rm $REMOTE_DIR/$DIST_ZIP"

scp $DIST_ZIP $REMOTE_USER@$REMOTE_HOST:./$REMOTE_DIR \
	|| error "Error copying '$DIST_ZIP' to the server '$REMOTE_HOST'."

SERIAL=$(date +%Y%m%d-%H%M%S)

ssh $REMOTE_USER@$REMOTE_HOST "cd $REMOTE_DIR && mv $REMOTE_TARGET $REMOTE_TARGET.$SERIAL && unzip $DIST_ZIP && mv $DIST_DIR $REMOTE_TARGET" \
	|| error "Error uncompressing file '$DIST_ZIP'."

echo
echo "- Successful operation, '$REMOTE_TARGET' updated."
