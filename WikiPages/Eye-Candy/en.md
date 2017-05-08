---
title: Eye Candy
version: 1
path: /en/wiki/Eye-Candy/
---
# Eye Candy
By default there's not much, fluxbox allows you to change its [style], the [wallpaper]() and there's the [slit], but for anything beyond that you have to resort to other means.

## Background Image


## Taskbar
You can replace the default fluxbox taskbar or use an additional taskbar application. To replace it you have to hide fluxbox's taskbar, either from its menu (makes changes to the init-file) or manually by editing the init-file and restarting fluxbox.

If you want the Systray to be taken over by your external taskbar, you need to disable it in fluxbox's taskbar by deleting *Systray* from sys[0]taskbar in your [init file](/en/wiki/Initialization).{.alert .alert-info}

Some of the alternatives shipped with debian:
- [tint2]
- [docky]
- [cairo-dock]

## Desktop Widgets
The most prominent tool is probably [conky], with it's LUA API its capable of drawing [impressive] things on your desktop, all of which is not interactive though.
For a great variety of clickables and draggables you can install gdesklets.


[style]: /WikiPages/Fluxbox/Style/en.md
[slit]: /WikiPages/Fluxbox/Slit/en.md
[init file]: /WikiPages/Fluxbox/Init/en.md

[tint2]:      https://gitlab.com/o9000/tint2#screenshots
[docky]:      http://wiki.go-docky.com/
[cairo-dock]: http://glx-dock.org/

[conky]:      https://github.com/brndnmtthws/conky
[impressive]: https://duckduckgo.com/?q=conky+lua&t=h_&iax=1&ia=images
