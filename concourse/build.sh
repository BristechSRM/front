#! /bin/sh

set -e
cd code
npm install -g webpack
npm install -g gulp

npm install 
gulp build
cd ..
cp code/build/* gulped/
