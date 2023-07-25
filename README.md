# Helsinki Full Stack Course
This is a repository for me to keep track of my progress and struggles from the University of Helsinki's [Deep Dive Into Modern Web Development](https://fullstackopen.com/en/) where they teach ya "React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go".

## Things I've learned so far:
✏️ Learning how to use [Git](https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github) effeciently
In a nutshell I must do:
```
0. git init
1. git add -A
2. git commit -m 'Added my project'
2a. git remote add origin git@github.com:sammy/my-new-project.git
3. git push -u -f origin main
```
✏️ Error: Permission denied (publickey)
This was a pain in the arse. I configured git on my local machine (macbook laptop whew) a long time ago when I was fiddling around with Discord bots for fun but never got the chance to properly set it up... I kept running into the (permission denied (publickey) error)[https://docs.github.com/en/authentication/troubleshooting-ssh/error-permission-denied-publickey] which had me set up an (SSH key and adding it to the ssh-agent)[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent] to then adding it to my (GitHub account)[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account], then it worked!!

✏️ The `git pull` command
Truth be told, I've written this readme.md file like 3 times already. Turns out it's because I'm (overwriting the local copy of my repro onto GitHub which deletes the readme file)[https://stackoverflow.com/questions/23229904/readme-md-file-missing-on-github]... Fun... Gotta remember to `git pull` first thing when I pull up on VSCode!
