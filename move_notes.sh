#!/bin/bash

JEKYLL_NOTES_PATH="/Users/huwfulcher/Projects/Sites/huwfulcher.com/_notes"
OBSIDIAN_NOTES_PATH="/Users/huwfulcher/Documents/Huw's Sync Vault"

echo "$JEKYLL_NOTES_PATH/"
echo "$OBSIDIAN_NOTES_PATH/"

echo "Deleting old notes"

rm "${JEKYLL_NOTES_PATH}"/*

echo "Moving notes from $OBSIDIAN_NOTES_PATH to $JEKYLL_NOTES_PATH"

cp -a "$OBSIDIAN_NOTES_PATH/" "$JEKYLL_NOTES_PATH/"
rm -r "$JEKYLL_NOTES_PATH/.obsidian"
