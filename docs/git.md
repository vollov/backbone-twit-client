[1]push tag to remote
$git push --tags

[2] Listing Your Tags
$ git tag

[3] search for tags at the 1.4.2 series
$ git tag -l 'v1.4.2.*'

[4] Create Annotated Tags
$ git tag -a v1.4 -m 'my version 1.4'

[5] Lightweight Tags
$ git tag v1.4-lw

[6] remove a tag
git tag -d tagname

[7] to push a single tag:
git push origin <tag_name>

[8] push/pull a branch
$git push -u origin plugin
$git fetch origin
$git checkout --track origin/plugin