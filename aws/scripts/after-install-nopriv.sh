#!/bin/bash

mkdir ~/app
aws s3 cp s3://lernib-bucket.build/static/ ~/app --recursive
aws s3 cp s3://lernib-bucket.build/artifacts/ ~/app --recursive

##############################
# INSTALL NODE
##############################
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 20

cd ~/app
npm i --production
