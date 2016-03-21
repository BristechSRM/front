#! /bin/sh

set -e
cd code

npm install 
gulp build
cd ..
cp -R code/build/* gulped/
 
