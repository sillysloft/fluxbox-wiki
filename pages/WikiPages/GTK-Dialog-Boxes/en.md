---
title: Dialog-Boxes
version: 0
path: /en/wiki/GTK-Dialog-Boxes/
---
# GTK/X11 Dialog Boxes
There are no Fluxbox dialog boxes and there's no need for that, in your distribution's package repository look out for:
- xmessage
- zenity
- yad

Pretty sure there are even more options.

Use one of these with a bash script and call it from the [Fluxbox menu]() or with a [keyboard shortcut]().

## Examples
bash script: [yad shutdown menu](shutdown.sh)
```
#! /bin/bash

action=$(yad --width 300 --entry --title "System Logout" \
    --window-icon=gnome-shutdown \
    --image=gnome-shutdown \
    --button="gtk-ok:0" --button="gtk-close:1" \
    --text "Choose action:" \
    --entry-text \
    "Logout" "Reboot" "Power Off")
ret=$?

[[ $ret -eq 1 ]] && exit 0

case $action in
    Logout*) cmd="killall fluxbox" ;;
    Reboot*) cmd="sudo /sbin/reboot" ;;
    Power*) cmd="sudo /sbin/poweroff" ;;
            *) exit 1 ;;
        esac

eval exec $cmd
```
```
zenity  --list  --text "System Shutdow" --radiolist  --column "" --column "" TRUE shutdown FALSE reboot FALSE suspend FALSE hibernate --hide-header --title "System Shutdown"
```
```xmessage "" -title "Take action" -default "Cancel" -buttons "Cancel","Reboot","Shutdown" -print -nearmouse
xmessage "Are you sure you want to shut down your computer?" -title "Take action" -default "Cancel" -buttons "Cancel":1,"Reboot":2,"Shutdown":3 -
print -nearmouse
```
