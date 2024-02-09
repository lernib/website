#!/bin/bash
set -xe

rm_if_exists() {
    if [ -d $1 ]; then
        rm -rf $1
    fi
}

rm_if_exists ~/app/build
rm_if_exists ~/api
