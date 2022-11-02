---
title_prefix: freshrss
title: Installing FreshRSS on my Raspberry Pi
date: '2022-02-04'
---

Recently, I found out about [FreshRSS](https://freshrss.org) from [Kev](https://kevq.uk).

I have been interested in trying it out for a long time but I just now got the time to do it.

The first thing I did was flash the Raspberry Pi OS Lite image to my SD Card, but before that I configured the WiFi and SSH things in the [hidden RPI imager menu](https://www.tomshardware.com/news/raspberry-pi-imager-now-comes-with-advanced-options), then I inserted the SD card into the Pi and booted it up.

Then I, of course, SSHed into it, did a quick `sudo apt update` and `sudo apt upgrade`.

I was off to the races! Next thing I did is opened up the [FreshRSS documentation for admins](https://freshrss.github.io/FreshRSS/en/admins/06_LinuxInstall.html) and followed the instructions step by step.

I did run into a roadblock with installing the database, since the [MySQL package did not exist anymore](https://stackoverflow.com/a/64031544/16417115), so instead, I replaced `sudo apt install mysql-server mysql-client php-mysql` with `sudo apt install mariadb-server php-mysql`.

Everything from there on out was the same, except for the installation part, instead of doing `git clone` in the `/usr/share` directory, I downloaded the latest release. Why, you ask? Well I [found out](https://joelchrono12.ml/blog/self-hosting-my-news-feed-with-freshrss/) that there was a bug in the newest version of FreshRSS (They were probably making some changes)

I also set up a self-signed certificate for the FreshRSS instance, but I wont get into that in this post.

# 📝 Final Thoughts

In this post I quickly went over how I installed FreshRSS and what hoops I needed to jump thru to get it up and running
