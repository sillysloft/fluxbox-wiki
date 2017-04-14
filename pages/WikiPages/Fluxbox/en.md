---
title: Fluxbox Internals
path: /en/wiki/Fluxbox/
---
# Fluxbox Essentials

## man Pages
Available fluxbox man pages are:
- fluxbox
- fluxbox-apps
- fluxbox-keys
- fluxbox-menu
- fluxbox-remote
- fluxbox-style
- fluxbox-update_configs
To read these locally installed documents, you have to use the `man` command in a console:
```
$ man fluxbox-style
... documentation for fluxbox styling shows up ...
```

## Configuration Files
All relevant files are located in ~/.fluxbox/.
```
$ ls ~/.fluxbox
apps
fbrun_history
init
keys
lastwallpaper
menu
overlay
slitlist
startup
styles/
windowmenu
workspace
```

## Starting Fluxbox
Usually Fluxbox is started from a script in your home directory. You can invoke it manually from the terminal with /usr/bin/startfluxbox, but normally this is done by your Login-Manager.
The last line in **~/.fluxbox/startup** is self-explaining:
```
#!/bin/sh
...
exec fluxbox
```
Use this file to automatically start applications when you log in to a new session.

## Initialization Process
First thing Fluxbox does, is to look for it's configuration file in ~/.fluxbox/init and to load it if this file exists.
If the init-file, the startup-file or any of the files listed in the init-file don't exist, they will be created with default values. Therefore, to undo possibly breaking changes you've made, it is ok to just delete the file in question and restart fluxbox.

## Configuring Fluxbox
### Init file
