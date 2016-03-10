#! /bin/sh

set -e
cd code
npm install -g webpack
npm install -g gulp

npm install 
gulp build
cd ..
cp -R code/build/* gulped/
ls code/build 
 
