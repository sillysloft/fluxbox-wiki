---
title: Rahmen und Fensterwerkzeuge
version: 1
path: /de/wiki/Rahmen-und-Fensterwerkzeuge/
---
# test
## gage

Da die Datei ~/.fluxbox/apps nicht in einem laufenden Fluxbox bearbeitet werden sollte muss man Fluxbox beenden und sie in einem beliebigen Texteditor öffnen.
[testlink](/de/wiki/Fluxbox-Menus/)
[borderless windows](/en/wiki/Window-Decorations/Borderless-Windows/)
Anschliessend fügt man folgende Zeilen ein:

```
  [app] (.*)
     [Deco]    {BORDER}
  [end]
```

Nach einem Neustart zeigt Fluxbox nur noch einen Rahmen um die Fenster an (wenn das gewählte Farbschema einen anzeigt) Farbe und Breite des Rahmens können angepasst werden,

Entweder Global (unabhängig vom Farbschema) overlay file oder separat in jedem Farbschema.

Folgende Zeilen passen den Rahmen an:
## hgage

  window.borderWidth:   
  window.borderColor:   color (Bsp. #009900, black, rgb:00/64/00)

Rahmen und externe Tabs anzeigen lassen

Seit Fluxbox 1.0rc gibt es wieder externe Tabs (Reiter), ergo können diese zusätzlich zum Rahmen verwendet werden. Die Zeilen in der apps Datei sehen dazu wie folgt aus:
```
  [app] (.*)
     [Deco]    {TAB}
  [end]
```
Dazu müssen allerdings die externen Tabs aktiviert werden, entweder über das Fluxbox-Menü oder in der init Datei.
