---
title: Rahmen und Fensterwerkzeuge
version: 1
path: /de/devel/Man-Pages/
---
# test
## gage

Da die Datei ~/.fluxbox/apps nicht in einem laufenden Fluxbox bearbeitet werden sollte muss man Fluxbox beenden und sie in einem beliebigen Texteditor öffnen.

Anschliessend fügt man folgende Zeilen ein:

  [app] (.*)
     [Deco]    {BORDER}
  [end]

Nach einem Neustart zeigt Fluxbox nur noch einen Rahmen um die Fenster an (wenn das gewählte Farbschema einen anzeigt) Farbe und Breite des Rahmens können angepasst werden,

Entweder Global (unabhängig vom Farbschema) overlay file oder separat in jedem Farbschema.

Folgende Zeilen passen den Rahmen an:
## hgage

  window.borderWidth:   
  window.borderColor:   color (Bsp. #009900, black, rgb:00/64/00)

Rahmen und externe Tabs anzeigen lassen

Seit Fluxbox 1.0rc gibt es wieder externe Tabs (Reiter), ergo können diese zusätzlich zum Rahmen verwendet werden. Die Zeilen in der apps Datei sehen dazu wie folgt aus:

  [app] (.*)
     [Deco]    {TAB}
  [end]

Dazu müssen allerdings die externen Tabs aktiviert werden, entweder über das Fluxbox-Menü oder in der init Datei.
## Inops magnis Acrisius remisit Circes

Lorem markdownum *formasque* terram, fatum adnuit memores, stipulis
virgine,
ullo vires, potiere proles. Modo [nec Aesacon](http://gifctrl.com/) et
vultum
praeter fata gemitus panda. Factaque sibi repressit saltem, flammaeque
ille per
et opus flecti tellus inter: curru sidus. O iunxit ita erat, frondes,
hac proles
inritaturque?

## Sed videt vestem vagatur

Palato rubentis enim, ora fontes lunaria, ventis iacebant pariter. Illa
latet
primae concedimus factis, animo ab nec vagantem praemia sustollit.
Secunda
detque ecce, sua vixque fontes *quantam* aede.

## <a name="yay"></a>Cuique in nullum futuri

Amphitryoniaden sanguine et nefas lactentis iuvencae scit? Venis et dedi
hoc
thalamoque palmite fata, nec tot. Procorum super [patre aranea
passis](http://reddit.com/r/thathappened) et regemque inque dedimus
[haerent
lumina ponunt](http://stoneship.org/), Rhodopeius lacertis! Conceperat
tellus:
hunc id nymphe en adest evolvere? Auro nescio extemplo triones et
sceleratus
queruntur inpavidus ab suos concutit, Ionio aut, de quo cinisque.

```javascript
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 700,
  scale: 1.618,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
```

## <a name="tith"></a>Diu fas tractaque Tethyn vidi exigere

Aenea inque est flexo armos et bovis! Naides alta vocisque videt fit
cervum
elusam Macareus vicisse illis unguibus. Multorumque tumulo
**praetemptatque
occidit** ingentique et summas Nili virgo vaticinata facinus positae
vestes,
*exstinguere iuvat* Lycaona postquam.

- Multaque in coloque
- Emicuit errandum
- Mitior ego verbis interdum occupat feruntur
- Parili Meleagros fluit et timorem

Gemit petit, cingentia quis carens, duxere es sortem corpora quamvis?
**Palmis
visa**, nec deo fuit Amphissos, et sprevere Acmona illa habuissem
**asper**. Et
[nemus](http://reddit.com/r/thathappened) Iunone: et deae!
