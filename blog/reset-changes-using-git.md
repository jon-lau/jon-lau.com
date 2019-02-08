---
layout: blog
type: blog
title: Reset Changes Using Git
date: 2017-06-24
labels:
  - Software Engineering
  - Git
  - Magic
---
<img class="ui centered image" src="../images/blog/reset-changes-using-git.svg">

Git is a version control system that can be extremely useful due to its ability to serve as a backup when something breaks. This concept is not new and has been applied to essentially every video game ever made. Analogous to the "load checkpoint" or "return to save point" in video games, Git has an interesting command which functions as "I'm sorry I touched the codebase, please pretend I didn't break anything". 

When trying to implement a new feature, testing a new UI, or just experimenting with a particular function, Git enables you to reset the codebase to your most recent commit. Thus, you are free to implement a new feature without having to worry about breaking the program or having to remember all the tiny details of what you changed. Git has a reset command used to undo changes in the staging area and in the working directory. Similarly, in a game, once you choose to "load checkpoint", all current progress is lost and you go back to when you last saved. Essentially, all progress is reverted and you go back in time.

Usage:
```shell
git reset --hard HEAD
```

When you undo with `git reset`, it is a permanent reversal as care must be taken when using this tool. The `--hard` flag comes in handy when an experiment has broken the system and you need a clean slate to work with. The `HEAD` refers to the most recent commit. Note this tool should only be used to undo local changes. You can now freely venture into the depths of the codebase as you have a tether to rely upon. 

Git is compassionate and loving.