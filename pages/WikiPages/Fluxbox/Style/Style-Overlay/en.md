---
title: Style Overlay
version: 1
path: /en/wiki/Fluxbox/Style/Style-Overlay/
---

# Style Overlay
## What is styleOverlay
There is an option called session.styleOverlay that allows users to override some or even all elements of style. This comes in very handy e.g. to keep fonts the same for every style. The syntax for the overlay file is the same as for regular style files.
```
session.styleOverlay: ~/.fluxbox/overlay
```

## Examples
### Set your custom fonts
```
menu.title.font: sans-10:bold
toolbar.clock.font: sans-10:bold
toolbar.workspace.font: sans-10:bold
*font: sans-8
```
### Override background settings
```
background: aspect   # or centered|tile
background.pixmap: /home/youruser/wallpapers/this_is_a_neat_wallpaper.jpg
```
