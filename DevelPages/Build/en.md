---
title: Build from sources
version: 1
path: /en/devel/Build/
---
# Build Fluxbox from sources

## debian
```
:~/$ sudo apt-get install build-essential pkg-config autoconf xorg-dev gettext
# evt. libiconv-hook-dev libtext-iconv-perl libtool aclocal
:~/$ git clone http://git.fluxbox.org/fluxbox.git/
:~/$ cd fluxbox
:~/fluxbox$ ./autogen.sh
:~/fluxbox$ ./configure
:~/fluxbox$ make
:~/fluxbox$ sudo make install
:~/fluxbox$ cd
:~/$ which fluxbox
/usr/local/bin/fluxbox
```
