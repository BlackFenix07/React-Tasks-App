# abort on errors 
set -e

# build 
nmp run build

# navigate into the build output directory
cd dist 

git init
git checkout -b main
git add -A 
git commit -m "deploy"

git push -f git@github.com:BlackFenix07/React-Tasks-App.git main:gh-pages

cd -