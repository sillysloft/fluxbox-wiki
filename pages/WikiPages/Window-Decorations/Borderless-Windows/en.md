---
title: Borderless Windows
version: 1
path: /en/wiki/Window-Decorations/Borderless-Windows/
---
<style>
img {
  margin: 10px;
}
img:nth-child(even){
  float: right;
}
img:nth-child(odd){
  float: left;
}
</style>
# Borderless Windows
For some applications you might want to turn off window decorations altogether.
![VLC Window with Decorations][v1]
This is useful e.g. for a console window or a video.
![Console Window without Decorations][v2]

## Toggle Borders
 To quickly toggle a window borderless, you can use a [custom windowmenu](/en/wiki/Fluxbox-Menus/#borderless-window) entry or a [custom keyboard shortcut](/en/wiki/Keyboard-Shortcuts/#toggle-window-decorations).

When decorations are disabled, you need a keyboard shortcut to reach the windowmenu for the application, which by default is set to [`Alt`+`Space`] as *right clicking on a window's titlebar* will not be an option then.

## Premanent Changes
To make things permanent, you can use the *Remember* option from the [windowmenu](/en/wiki/Fluxbox-Menus/#window-menu) to let fluxbox edit your apps file or you can do that by hand.

[v1]: 1488826811.png "before"
[v2]: 1488826835.png "before"
