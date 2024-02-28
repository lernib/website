#!/bin/bash

mkdir ~/app
mkdir ~/api

aws s3 cp s3://lernib-bucket.build/ec2/sveltekit/static/herobg.jpg ~/app
aws s3 cp s3://lernib-bucket.build/ec2/sveltekit/artifacts/ ~/app --recursive

aws s3 cp s3://lernib-bucket.build/ec2/api/static/ ~/api --recursive
aws s3 cp s3://lernib-bucket.build/ec2/api/artifacts/build ~/api --recursive

##############################
# INSTALL NODE
##############################
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 20

cd ~/app
npm i

cd ~/api
npm i
node ace migration:run
