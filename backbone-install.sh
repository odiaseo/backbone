#!/bin/sh

#Install node.js
sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs

#install nodemon
sudo npm install nodemon -g

#install grunt
sudo npm install -g grunt-cli

#clone project boiler plate 
sudo git clone https://github.com/BoilerplateMVC/Backbone-Require-Boilerplate.git
cd Backbone-Require-Boilerplate
sudo npm install
 
#install express
sudo npm install -g express

nodemon
