#!/bin/bash

BUNDLE_FILE_BASE=fundoo-frontend
BUNDLE_FILE=$BUNDLE_FILE_BASE-$BUILD_NUMBER.tar.gz
SERVER_IP=18.119.109.3
APPS_HOME=/home/ec2-user/apps
FOLDER_NAME=fd-frontend
EC2_SSH_KEY=/var/lib/jenkins/jenkins_key.pem

rm -rf *.tar.gz
npm install
npm run build
cd dist/fundoo-notes-app
tar czf $BUNDLE_FILE *
scp -o StrictHostKeyChecking=no -i $EC2_SSH_KEY $BUNDLE_FILE ec2-user@$SERVER_IP:$APPS_HOME/$BUNDLE_FILE_BASE.tar.gz


ssh -o StrictHostKeyChecking=no -i $EC2_SSH_KEY ec2-user@$SERVER_IP << 'ENDSSH'
BUNDLE_FILE=fundoo-frontend.tar.gz
APPS_HOME=/home/ec2-user/apps
FOLDER_NAME=fd-frontend

cd $APPS_HOME
rm -rf $FOLDER_NAME
mkdir $FOLDER_NAME
tar -xf $BUNDLE_FILE -C $FOLDER_NAME
ENDSSH
