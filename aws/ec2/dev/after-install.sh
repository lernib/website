#!/bin/bash
set -xe

export RESPATH=/usr/local/codedeployresources

##############################
# INSTALL HTTPD
##############################
yum update -y
yum install httpd -y

##############################
# CONFIGURE HTTPD
##############################
rm -f /etc/httpd/conf/httpd.conf
cp $RESPATH/httpd.conf /etc/httpd/conf/httpd.conf
cp $RESPATH/dev/site.conf /etc/httpd/conf.d/site.conf
cp $RESPATH/dev/site-ssl.conf /etc/httpd/conf.d/site-ssl.conf.disabled
cp $RESPATH/dev/api.conf /etc/httpd/conf.d/api.conf
cp $RESPATH/dev/api-ssl.conf /etc/httpd/conf.d/api-ssl.conf.disabled


yum install certbot python3-certbot-apache -y
certbot certonly --apache --non-interactive --agree-tos --email support@lernib.com -d dev.lernib.com
certbot certonly --apache --non-interactive --agree-tos --email support@lernib.com -d api.dev.lernib.com

mv /etc/httpd/conf.d/site-ssl.conf.disabled /etc/httpd/conf.d/site-ssl.conf
mv /etc/httpd/conf.d/api-ssl.conf.disabled /etc/httpd/conf.d/api-ssl.conf
systemctl restart httpd

mv $RESPATH/site.service /etc/systemd/system/site.service
mv $RESPATH/api.service /etc/systemd/system/api.service

systemctl enable site
systemctl restart site
systemctl start site

systemctl enable api
systemctl restart api
systemctl start api

systemctl enable httpd
systemctl start httpd
