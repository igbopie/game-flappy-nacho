cd tools/
./bake.sh
cd ..
git add -A
git commit -am "Commit"
git push origin master
git checkout gh-pages
git merge master 
git push origin gh-pages
git checkout master
