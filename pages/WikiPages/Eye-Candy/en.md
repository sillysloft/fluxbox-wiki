---
title: Eye Candy
version: 1
path: /en/wiki/Eye-Candy/
---
# Eye Candy
By default there's not much, fluxbox allows you to change its [style](/en/wiki/Fluxbox-Style/), the [wallpaper]() and there's the [slit](), but for anything beyond that you have to resort to other means.

## Background Image


## Taskbar
You can replace the default fluxbox taskbar or use an additional taskbar application. To replace it you have to hide fluxbox's taskbar, either from its menu (makes changes to the init-file) or manually by editing the init-file and restarting fluxbox.

If you want the Systray to be taken over by your external taskbar, you need to disable it in fluxbox's taskbar by deleting *Systray* from sys[0]taskbar in your [init file](/en/wiki/Initialization).{.alert .alert-info}

Some of the alternatives shipped with debian:
- [tint2](https://gitlab.com/o9000/tint2#screenshots)
- [cairo-dock](http://glx-dock.org/)
- [docky](http://wiki.go-docky.com/)

## Desktop Widgets
The most prominent tool is probably [conky](https://github.com/brndnmtthws/conky), with it's LUA API its capable to draw [impressive](https://duckduckgo.com/?q=conky+lua&t=h_&iax=1&ia=images) things to your desktop, all of which is not interactive though.
For a great variety of clickables and draggables you can install gdesklets.
