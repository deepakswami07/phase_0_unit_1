## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


git add:
This command adds files to the staging area or the place from where the file will be commited or saved.  It does not add new files it just brings new files to git's attention.  If you were working on a file and you are happy with the changes you made.  Then type git add + name of the file.  This sets the file to staging area, from where you can commit it.  Another way to think, add takes a snap shot and commit saves the snap shot.


git branch:
Creates a new branch from the master.  If you need to add some new features to a master file, you will first create a branch of the master and then work on it.


git checkout:
This command helps you switch between branches of a project.  For example, if were working on a branch of a master and then you wanted to check the master, then you will type git checkout master, and then you will be able to access the master.

git clone:
Makes a copy of a project or codebase to your local computer.  You type in the git clone command + the git hub url. This is useful if you are working on a project with someone and you want to get a copy that you can work on.


git commit:
A very important command, after you add a file to git, the next step is to commit it.  You commit it by using the following command: git commit -m "some message".  This message is important, so you want to have a short and a very specific message.


git fetch:
This command will sync your repo with another repo, getting you any data that your repo is missing.  It also bookmarks where each of the missing data was when you synched the files.

git log:
Shows the history of all you commits.  If you have been committing a lot of files and want to know where you are, you can run git log and it will show you the commit history with all the details.


git merge:
This command merges two branches.  If you were working on a branch of the master, and have addded some changes to the branch, using this command "git merge + branch name will merge the changes to the master.

git pull:
Using this command you can get a folder or code form a remote location.This command will bring in the new data and also merge the date to the branch you are calling from.  Not a recommended method to sync.

git push:
After you have made all your commits and want to share it on remote repo, you will use a git push command.  The way the command needs to written is: git push origin 

git reset:
This command lets you unstage a file that you have added.  For example if you have staged/added a file to be commited and want to remove it from the stage.
git reset HEAD "name of the file"

git rm:
This command will remove and delete a file from the staging area and also from your drive.

git status:
This command wil give you info of the files you have committed, files you have deleted, files that were modified since your last commit.


## Release 4: Git Workflow

- Push files to a remote repository

 $ cd (folder name)
 $ git init
 $ git add file.name
 $ git commit -m "message"
 $ git push origin 

- Fetch changes
  $ cd (folder name)
  $ git init
  $ git fetch upstream


- Commit locally
 $ cd (folder name)
 $ git init
 $ ls
 $ git add file.name
 $ git commit -m "message

## Release 5: Reflection
I find using simple command on terminal so much easier than using the app.  First I was totally intimidated by all the commands, but once you use them and see the result, it is almost magical.  As this is the way web developers work, I plan to open files, edit files and do all things git using the terminal.  

However, I did run into a few problems in the early stages, my phase0-unit_1 folder would not connect to github via the terminal, I ran git remote to check the link but it did not return a link address.  Then I tried to push my file with the http address of my account, that also did not work.  The next day, I went back and tried to upload my other folder with the unit_1 files and I was successful.  When I did a git remote on this folder, it passed and showed me link.  Then I was sure that phase0_unit_1 was not linked.  After doing some research, I found out that you can relink, uisng the command git relink + the http address.  I tried and it worked.  The next day when I tried to push some files, I ran into similar problems.  With the help of a DBC tutor, I was eventually able to fix the problem. What I have learned so far has opened a new and a more efficient way to move files, create folders, make changes, open files through terminal.  I know this is just the tip of the iceberg and as I use it more, hopefully I will get better.
