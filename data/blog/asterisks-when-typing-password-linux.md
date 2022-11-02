---
title_prefix: Linux beginnings
title: Showing Asterisks When Typing Password In Linux
date: '2022-01-30'
---

Some linux beginners get confused when typing their password, because it actually does not echo to the terminal.

Well, this is a quick and simple post to do just that, show output when typing password in linux.

To do this, you will need to run this command

`sudo EDITOR="nano" visudo`

visudo is the editor used for editing the /etc/sudoers file, and we use the `EDITOR` env to use an easier editor instead of vim.

Don't try to edit the file with just `sudo nano` because visudo is the only correct editor to use, because it makes a backup and is much more reliable and secure than just editing the file like you do normally.

Anywhere in the file, add `Defaults pwfeedback`

And voila! Restart your terminal and run any command with sudo, and when you are typing your password, there will be asterisks.
