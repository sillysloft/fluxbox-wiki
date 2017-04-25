---
title: Fluxbox Menus
version: 1
path: /fr/wiki/Fluxbox/Menus/
---
# Le System de Fluxbox Menu
## Standart Menus
Il sont 3 Menu en Fluxbox normale.
1. das **Anwendungs Menu**, Rechtsklick auf dem Desktop
1. das **Fenster Menu**, Rechtsklick auf der Titelleiste eines Fensters
1. das **Arbeitsplatz Menu**, mittlere Maustaste auf dem Desktop
daneben gibt es die Möglichkeit unbegrenzt viele individuelle Menus zu erstellen.

## Syntax
Menu-Dateien sind normale Textdateien mit je einem Menu-Eintrag je Zeile. Sie beginnen mit [begin] und enden mit [end]. Menu-Überschriften und Einrückungen sind optional.
Leerzeilen sind erlaubt, ebenso Kommentare, welche mit `#` oder `!` beginnen.

```
[begin] (mein Menu)
  ...
[end]
```

## Menu Öffner
Zum Öffnen eines Menus bedarf es entweder eines Eintrags in der keys Datei, oder man benutzt das [custommenu] Kommando um ein Menu aus einem anderen Menu heraus aufzurufen.

## Individuelle Menus
To create a custom menu, you need to create a new menu file. These are plain, line separated text files, starting with [begin] and ending with [end]. Custom titles for the menu can be set with [begin] (custom Title).

## Beispiele
### Individuelles Beenden Menu
Sie benötigen diese [Menu Datei](menu-exit), speichern Sie sie unter ~/.fluxbox/menu-exit
```plain
[begin] (Exit)
  [exec] (shutdown) {sudo shutdown -h now}
  [exec] (suspend) {sudo s2ram}
  [exec] (reboot) {sudo shutdown -r now}
  [exit] (logout)
  [exec] (lock) {xtrlock}
[end]
```
Sie müssen möglicherweise noch die Passwortbestätigung für sudo Befehle deaktivieren.
Jetzt fügen Sie noch einen Menuöffner zu ihrem Fluxbox Anwendungs Menu hinzu:
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
