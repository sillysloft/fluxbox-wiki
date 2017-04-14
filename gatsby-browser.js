/* global document, ScrollSpy */
/* eslint-disable no-new */
import { ScrollSpy, Affix } from './static/bootstrap-native.min.js'

let onRouteUpdate = () => {}

if (typeof document !== 'undefined' && process.env.NODE_ENV === 'development') {
  onRouteUpdate = () => {
    delete document.body.ScrollSpy
    if (document.querySelector('#spytoc')) {
      new ScrollSpy(document.body, {
        target: document.querySelector('#spytoc'),
        offset: 80,
      }).refresh()
      new Affix(document.getElementById('spytoc'))
    }
  }
}

exports.onRouteUpdate = onRouteUpdate
