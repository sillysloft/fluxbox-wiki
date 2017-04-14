---
title: Fluxbox Menus
version: 1
path: /en/wiki/Fluxbox/Menus/
---
# Fluxbox Menu System

**Man-Page:**  
``:~/$ man fluxbox-menu``
{.alert-info .alert}

## Default Menus
There are 3 Menus in fluxbox by default.
- Main Application Menu, right click on the desktop
- Window Menu, right click on a windows titlebar
- Workspace Menu, middle click on the desktop

## Syntax
Menu files are plain text files, line separated and start with [begin] and end with [end]. Custom titles for the menus can be set with [begin] (custom Title).

## Menu Opener
To open menus you can either define a action in the keys file or use the [custommenu] command to open from another menu.

## Custom Menus
To create a custom menu, you need to create a new menu file. These are plain, line separated text files, starting with [begin] and ending with [end]. Custom titles for the menu can be set with [begin] (custom Title).

## Examples
### Custom Exit Menu
You need this [menu file](menu-exit), save it to `~/.fluxbox/menu-exit`. You may also need to [disable password]() confirmation for these sudo commands.  
```plain
[begin] (Exit)
  [exec] (shutdown) {sudo shutdown -h now}
  [exec] (suspend) {sudo s2ram}
  [exec] (reboot) {sudo shutdown -r now}
  [exit] (logout)
  [exec] (lock) {xtrlock}
[end]
```
Now add a menu opener to your main fluxbox application menu in `~/.fluxbox/menu`.
```
[begin] (Fluxbox)
  ... other entries ...
  [custommenu] (Exit) {~/.fluxbox/menu_exit}
[end]
```
### Borderless Window
Add this entry to your ~/.fluxbox/windowmenu to toggle all decorations on/off.
```plain
[begin]
  [toggledecor] (Decorations)
  ... other menu entries ...
[end]
```
Remember: default keyboard shortcuts allow to open the windowmenu with [`Alt`+`space`] as *right click on window titlebar* will become unavailable with no decorations.
