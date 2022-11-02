---
title_prefix: musl
title: Trying out Void Linux
date: '2022-01-15'
---
Since I really like to distro hop on my ThinkPad, I thought why not give Void Linux a try?

First, I downloaded the ISO image from [their website](https://voidlinux.org). Everything went smoothly, the only thing I noticed is that the image seems to be kind of old (from september 2021). Anyways, I opened up etcher and picked the ISO and flashed it to my flash drive, which I plugged in into the laptop. I booted from the USB and a grub menu appeared, I am entering the void :) I chose the first option and booted up to a default XFCE enviroment.

To install Void, I opened up the terminal, did a `sudo su` and ran `void-installer`. I picked all the settings and partitioned my drive, then I rebooted. I was back at the XFCE desktop, now with a installed copy of Void Linux!

The first thing I did after installation is installing a new desktop enviroment and uninstalling XFCE. I went for GNOME, it was pretty straightforward, just a quick `sudo xbps-install gnome`. I went and followed the [documentation](https://docs.voidlinux.org/config/services/index.html) on disabling the lxdm service, which was part of XFCE. I enabled GDM and I was booted into the GNOME desktop!

Everything from there on went smoothly, I installed all my icon packs, themes, shell extensions etc, but I ran into a problem when trying to install Discord, I tried installing it but it couldn't find it in the default repos, I needed to use [void-packages](https://github.com/void-linux/void-packages) to be able to install it, which was kind of a longer process because I needed to wait for the repository to clone and for all commands to run.
