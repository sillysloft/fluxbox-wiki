---
title: Tastenkürzel
version: 1
path: /de/wiki/Tastenkurzel/
---
# Tastenkombinationen
Die Datei mit Maus- und Tastenkombinationen ist in Fluxbox's [`init` Datei](/de/wiki/Init-Datei) definiert.
Standartmäßig wird ¸/.fluxbox/keys genutzt, Sie können diese Datei nach belieben verändern oder mit einer anderen, leeren Datei beginnen.
Nachdem Sie ihre keys Datei bearbeitet haben, müssen Sie fluxbox veranlassen die Konfiguration neu einzulesen. Dazu verwenden Sie den reconfigure Befehl.

Es gibt auch die [man page](/de/wiki/Installation/#man-pages) `fluxbox-keys` hierzu.

## Spezialtasten
Wenn Spezialtasten Ihrer Tastatur mit Funktionen belegen möchten, können Sie das Programm `xev` in einem Terminalemulator verwenden um Tastencodes und X11 Symbolnamen der jeweiligen Tasten zu erfahren.
Weiter unten sehen Sie Beispiele für das Belegen von Spezialtasten ([1](#zyklisches-andern-der-fenstergrosse-und-position)).

## Beispiele
### Fensterdekorationen ein-und ausschalten
```plain
# toggle window decorations with Super+t
Mod4 t   :ToggleDecor
```
### Lautstärkeregelung
```plain
# change audio volume
None XF86AudioLowerVolume   :Exec amixer sset Master,0 5%-
None XF86AudioRaiseVolume   :Exec amixer sset Master,0 5%+
None XF86AudioMute          :Exec amixer sset Master,0 toggle
```
### zyklisches ändern der Fenstergröße und -position
When creating somewhat more complicated commands, it may help to write over more lines and use indentations. When you're done, just concatenate and save. Many editors have keyboard shortcuts like `ctrl`+`j` to join lines and `ctrl`+`m` to jump to matching brackets.{.alert .alert-info}
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
