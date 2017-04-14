---
title: Window Decorations
version: 5
path: /en/wiki/Window-Decorations/
---
# Window Decorations
subpages
- [borderless windows](/en/wiki/Window-Decorations/Borderless-Windows/)
-
## Borderless Windows
### Disable Borders by Default
There is session.screen0.defaultDeco settings option in ~/.fluxbox/init, you can disable all window decorations there, or e.g. enable only border and tabs, Settings  
### Toggle Border Visibility
#### Keyboard Shortcut
Assign a [keyboard shortcurt](/en/wiki/Keyboard-Shortcuts), e.g. ```Alt+t```  
```
Mod4 t :ToggleDecor
```
#### Windowmenu
Add an entry to the [windowmenu](/en/wiki/Windowmenu) [windowmenu](/de/wiki/Starthilfe/#yay) (right click on window titlebar)
Add an entry to the [windowmenu](/en/wiki/Windowmenu) [dl](/de/wiki/Starthilfe/#sedvidet) (right click on window titlebar)
```
[toggledecor] (Decorations)
```

Using the above example, you can hold the Win key and hit T to toggle window decorations. You may need to reload your configuration, found in the Fluxbox portion of your menu.

Per Application (Global)
If you want a specific application to be always borderless, then right click the window title to bring up the windowmenu. Go to the 'Remember' section and enable 'Save on close' and 'Decorations' Options.
Now use your keybinding to remove the window decorations. Closing the window will save the settings to your ~/.fluxbox/apps file. All windows of the respective application you open from now on will have no window decorations.

Per Application (Specific)
The previous way will be a global setting for one application. For example, if you want your aterm with irssi running in it to be the borderless window, but all other instances of the aterm show the window decoration normally, you need to set a name for this specific aterm. Most terminals use the -name switch for it:

aterm -name irssiterm -e irssi
Applying the key-combination on that special aterm will create an entry in your apps file similar to this:

[app] (name=irssiterm) (class=Aterm)
[Deco] {NONE}
[end]
...and it will only apply for an app named irssiterm, which you can force via the -name switch.

Global
You can also have all windows borderless by default, by placing this inside ~/.fluxbox/init:

 session.screen0.defaultDeco: NONE
A quick configuration reload will make this stick.
[windowmenu](/en/wiki/Windowmenu#menu)
Visit [Daring Fireball][] for more information.

[Daring Fireball]: http://daringfireball.net/

I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
