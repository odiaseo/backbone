#!/bin/sh

#Install node.js
sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs

# install mongodb and mongoose
# add to source list as root
# echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' >> /etc/apt/sources.list.d/10gen.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
sudo apt-get update
sudo apt-get -y install mongodb-10gen

#install nodemon
sudo npm install nodemon -g

#install grunt
sudo npm install -g grunt-cli
sudo npm install -g mongodb --mongodb:native
npm install mongoose

#clone project boiler plate 
git clone https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate.git
cd Backbone-Require-Boilerplate
sudo npm install
 
#install express
sudo npm install -g express

#start the daemon
nodemon
