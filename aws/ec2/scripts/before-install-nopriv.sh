#!/bin/bash
set -xe

# Delete the old directory as needed.
if [ -d ~/app/build ]; then
    rm -rf ~/app/build
fi
