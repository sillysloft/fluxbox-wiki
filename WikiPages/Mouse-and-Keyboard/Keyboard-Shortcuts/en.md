---
title: Keyboard Shortcuts
version: 5
path: /en/wiki/Keyboard-Shortcuts/
---
# Keyboard Shortcuts
The keyboard-shortcuts-file is defined in Fluxbox's [init-file](/en/wiki/Init-File).
By default ~/.fluxbox/keys is used, you can modify it to your liking or use a new empty file if you want.
After editing the keys file, you need to tell fluxbox to reload the shortcut definitions by running the [fluxbox command](/en/wiki/Fluxbox-Commands/#reconfigure) ``reconfigure``.  

There's also a dedicated [man page](/en/wiki/Install/#man-pages) ``fluxbox-keys``

## Special Keys
If you want to assign some special key that your keyboard has to offer, you can use ``xev`` to reveal it's keycode and symname, then assign an action in your keys file.  
The Examples Section below shows use cases for [XF86AudioLowerVolume](#volume-control), [xf86Launch1](#cycle-through-window-dimensions-and-positions).

## Syntax of shortcut definitions
Valid modifier key names are:
- "Control" Control-Key (``ctrl`` or ``^``)
- "Mod1" Alt-Key (``Alt`` or ``⎇``)
- "Mod4" Super-Key (Windows-Logo or ``◇``)
- "None" no modifiers used (not needed)
- "Click1" - "Click5" Mouse click&release 1-3 left/middle/right, 4-5 Wheel up/down
- "Mouse1" - "Mouse3" Mouse click&hold 1-3 left/middle/right, 4-5 Wheel up/down

## Examples
### Toggle Window Decorations
```plain
# toggle window decorations with Super+t
Mod4 t   :ToggleDecor
```
### Volume-Control
```plain
# change audio volume
None XF86AudioLowerVolume   :Exec amixer sset Master,0 5%-
None XF86AudioRaiseVolume   :Exec amixer sset Master,0 5%+
None XF86AudioMute          :Exec amixer sset Master,0 toggle
```
### Cycle through Window Dimensions and Positions
Use some special key named `XF86Launch2` to cycle through various window sizes and positions. This will toggle between ⅓ and ⅔ sized windows in various positions, maximized horizontically for head 1 and maximized vertically for head 2, on other heads it'll just toggle between maximized and restored.

When creating somewhat more complicated commands, it may help to write over more lines and use indentations. When you're done, you need to concatenate these lines because every configuration has to be on one line. Many editors have keyboard shortcuts like `ctrl`+`j` to join lines and `ctrl`+`m` to jump to matching brackets.{.alert .alert-info}
```plain
Help :If
  {Matches (HEAD=0)}
    {ToggleCmd
      {MacroCmd {ResizeTo 640 50%} {MoveTo 0 0 TopLeft} {MaximizeVertical}}
      {MacroCmd {ResizeTo 640 50%} {MoveTo 640 0 TopLeft} {MaximizeVertical}}
      {MacroCmd {ResizeTo 640 50%} {MoveTo 1280 0 TopLeft} {MaximizeVertical}}
      {MacroCmd {ResizeTo 1280 50%} {MoveTo 0 0 TopLeft} {MaximizeVertical}}
      {MacroCmd {ResizeTo 1280 50%} {MoveTo 640 0 TopLeft} {MaximizeVertical}}
    }
    {If {Matches (HEAD=1)}
      {ToggleCmd
        {MacroCmd {ResizeTo 100% 610} {MoveTo 0 0 BottomLeft} {MaximizeHorizontal}}
        {MacroCmd {ResizeTo 100% 610} {MoveTo 0 610 BottomLeft} {MaximizeHorizontal}}
        {MacroCmd {ResizeTo 100% 700} {MoveTo 0 0 TopLeft} {MaximizeHorizontal}}
        {MacroCmd {ResizeTo 100% 1310} {MoveTo 0 0 TopLeft} {MaximizeHorizontal}}
        {MacroCmd {ResizeTo 100% 1220} {MoveTo 0 0 BottomLeft} {MaximizeHorizontal}}
      }
      {MacroCmd {Restore} {Maximize}}
    }
```
```
Help :If
  {Matches (HEAD=1)}
    {ToggleCmd
      {MacroCmd {ResizeTo 100% 610} {MoveTo 0 0 BottomLeft} {MaximizeHorizontal}}
      {MacroCmd {ResizeTo 100% 610} {MoveTo 0 610 BottomLeft} {MaximizeHorizontal}}
      {MacroCmd {ResizeTo 100% 700} {MoveTo 0 0 TopLeft} {MaximizeHorizontal}}
      {MacroCmd {ResizeTo 100% 1310} {MoveTo 0 0 TopLeft} {MaximizeHorizontal}}
      {MacroCmd {ResizeTo 100% 1220} {MoveTo 0 0 BottomLeft} {MaximizeHorizontal}}
      {Maximize}
    }
    {If {Matches (HEAD=2)}
      {ToggleCmd
        {MacroCmd {ResizeTo 640 100%} {MoveTo 0 0 TopLeft} {MaximizeVertical}}
        {MacroCmd {ResizeTo 640 100%} {MoveTo 640 0 TopLeft} {MaximizeVertical}}
        {MacroCmd {ResizeTo 640 100%} {MoveTo 1280 0 TopLeft} {MaximizeVertical}}
        {MacroCmd {ResizeTo 1280 100%} {MoveTo 0 0 TopLeft} {MaximizeVertical}}
        {MacroCmd {ResizeTo 1280 100%} {MoveTo 640 0 TopLeft} {MaximizeVertical}}
        {Maximize}
      }
      {ToggleCmd {Restore} {Maximize}}
    }
Help :If
  {Matches (HEAD=1)}
    {ToggleCmd
      {MacroCmd {ResizeTo 100% 610} {MoveTo 0 0 BottomLeft}}
      {MacroCmd {ResizeTo 100% 610} {MoveTo 0 610 BottomLeft}}
      {MacroCmd {ResizeTo 100% 700} {MoveTo 0 0 TopLeft}}
      {MacroCmd {ResizeTo 100% 1310} {MoveTo 0 0 TopLeft}}
      {MacroCmd {ResizeTo 100% 1220} {MoveTo 0 0 BottomLeft}}
      {Maximize}
    }
    {If {Matches (HEAD=2)}
      {ToggleCmd
        {MacroCmd {ResizeTo 640 100%} {MoveTo 0 0 TopLeft}}
        {MacroCmd {ResizeTo 640 100%} {MoveTo 640 0 TopLeft}}
        {MacroCmd {ResizeTo 640 100%} {MoveTo 1280 0 TopLeft}}
        {MacroCmd {ResizeTo 1280 100%} {MoveTo 0 0 TopLeft}}
        {MacroCmd {ResizeTo 1280 100%} {MoveTo 640 0 TopLeft}}
        {Maximize}
      }
      {ToggleCmd {Restore} {Maximize}}
    }
Help :If
  {Matches (HEAD=1)}
    {ToggleCmd
      {MacroCmd {ResizeTo 100% 610} {MoveTo 0 0 BottomLeft}}
      {MacroCmd {ResizeTo 100% 610} {MoveTo 0 610 BottomLeft}}
      {MacroCmd {ResizeTo 100% 700} {MoveTo 0 0 TopLeft}}
      {MacroCmd {ResizeTo 100% 1310} {MoveTo 0 0 TopLeft}}
      {MacroCmd {ResizeTo 100% 1220} {MoveTo 0 0 BottomLeft}}
      {Maximize}
    }
    {If {Matches (HEAD=2)}
      {ToggleCmd
        {MacroCmd {ResizeTo 640 100%} {MoveTo 0 0 TopLeft}}
        {MacroCmd {ResizeTo 640 100%} {MoveTo 640 0 TopLeft}}
        {MacroCmd {ResizeTo 640 100%} {MoveTo 1280 0 TopLeft}}
        {MacroCmd {ResizeTo 1280 100%} {MoveTo 0 0 TopLeft}}
        {MacroCmd {ResizeTo 1280 100%} {MoveTo 640 0 TopLeft}}
        {Maximize}
      }
      {ToggleCmd {Restore} {Maximize}}
    }
```
```plain
# use the special key of a sony notebook to cycle through different window dimensions and positions for the active window, depending on the current display (vertical positioning on head1, horizontal positioning on head2)
Help :If {Matches (HEAD=0)} {ToggleCmd {MacroCmd {ResizeTo 640 50%} {MoveTo 0 0 TopLeft} {MaximizeVertical}} {MacroCmd {ResizeTo 640 50%} {MoveTo 640 0 TopLeft} {MaximizeVertical}} {MacroCmd {ResizeTo 640 50%} {MoveTo 1280 0 TopLeft} {MaximizeVertical}} {MacroCmd {ResizeTo 1280 50%} {MoveTo 0 0 TopLeft} {MaximizeVertical}} {MacroCmd {ResizeTo 1280 50%} {MoveTo 640 0 TopLeft} {MaximizeVertical}} } {If {Matches (HEAD=1)} {ToggleCmd {MacroCmd {ResizeTo 100% 610} {MoveTo 0 0 BottomLeft} {MaximizeHorizontal}} {MacroCmd {ResizeTo 100% 610} {MoveTo 0 610 BottomLeft} {MaximizeHorizontal}} {MacroCmd {ResizeTo 100% 700} {MoveTo 0 0 TopLeft} {MaximizeHorizontal}} {MacroCmd {ResizeTo 100% 1310} {MoveTo 0 0 TopLeft} {MaximizeHorizontal}} {MacroCmd {ResizeTo 100% 1220} {MoveTo 0 0 BottomLeft} {MaximizeHorizontal}} } {MacroCmd {Restore} {Maximize}} }
```
### Run any system command
```plain
# use the eject key of a mac keyboard to toogle room lights on/off
169           :ExecCommand echo "pl a1 off" |nc -w 2 192.168.0.10 1099
Control 169   :ExecCommand echo "pl a2 off" |nc -w 2 192.168.0.10 1099
```
### Open a custom fluxbox menu
See also: the example for a [custom exit menu](/en/wiki/Fluxbox-Menus/#custom-exit-menu).
 ```plain
# use Windows-Key + Space to open an otherwise kind-of-hidden menu
Mod4 space   :CustomMenu ~/.fluxbox/custom-menu
```
