---
layout: blog
type: blog
title: Mirror Git Repository With History
date: 2017-06-23
labels:
  - Software Engineering
  - Git
  - Magic
---
<img class="ui small right floated rounded image" src="../images/blog/mirror-git-repository-with-history.png">

**Objective**: Replicate state of an origin repository and mirror all history including branches to a new repository.

Sometimes you may want to copy files from one repository to another and at the same time, preserve the history, branches, and all other aspects of the old repository. Occasionally, you may also want to copy files without forking the original repository. Although there are many ways to accomplish this, the quickest method for duplicating a repository involves three steps.

`Warning:` This method will overwrite any existing files in the "new repository" so ensure that this "new repository" is a fresh empty repository. 

To ensure no existing files are accidently removed, create a new repository on Github. You can mirror your old repository to its new home with:

```shell
git clone --mirror https://github.com/username/origin-repository.git
cd origin-repository.git
git push --mirror https://github.com/username/new-repository.git
```
With this quick and simple method, duplicating a git repository is quick and painless.