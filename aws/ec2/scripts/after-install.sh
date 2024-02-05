#!/bin/bash
set -xe

##############################
# INSTALL HTTPD
##############################
yum update -y
yum install httpd -y

##############################
# CONFIGURE HTTPD
##############################
rm -f /etc/httpd/conf/httpd.conf
cp /usr/local/codedeployresources/httpd.conf /etc/httpd/conf/httpd.conf
cp /usr/local/codedeployresources/site.conf /etc/httpd/conf.d/site.conf
cp /usr/local/codedeployresources/site-ssl.conf /etc/httpd/conf.d/site-ssl.conf.disabled

yum install certbot python3-certbot-apache -y
certbot certonly --apache --non-interactive --agree-tos --email support@lernib.com -d lernib.com -d www.lernib.com

mv /etc/httpd/conf.d/site-ssl.conf.disabled /etc/httpd/conf.d/site-ssl.conf
systemctl restart httpd

mv /usr/local/codedeployresources/site.service /etc/systemd/system/site.service

systemctl enable site
systemctl restart site
systemctl start site

systemctl enable httpd
systemctl start httpd
