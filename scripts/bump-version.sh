#!/bin/bash

# Exit script if any command fails
set -e

# Fetch tags
git fetch --tags

# Get latest tag name
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)

# Initialize variables
majorBump=false
minorBump=false
patchBump=false

# Analyze commits since the last tag
for commit in $(git log $latestTag..HEAD --oneline); do
    if [[ $commit == *"major"* ]]; then
        majorBump=true
        break # Major bump overrides other bumps
    elif [[ $commit == *"feat"* ]]; then
        minorBump=true
    elif [[ $commit == *"fix"* ]]; then
        patchBump=true
    fi
done

# Determine version bump
if $majorBump; then
    versionBump="major"
elif $minorBump; then
    versionBump="minor"
elif $patchBump; then
    versionBump="patch"
else
    echo "No version bump required"
    exit 0
fi

# Check if the working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "Uncommitted changes detected. Committing them before version bump..."
    git add .
    git commit -m "chore: prep for version bump"
fi

# Bump version
echo "Performing a $versionBump version bump"
npm version $versionBump -m "chore(release): %s"

# Push changes
git push origin HEAD --tags
