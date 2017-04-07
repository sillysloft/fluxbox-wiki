/* global window */
import React from 'react'
import { browserHistory } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {
  componentDidMount () {
    const browserLang = window.navigator.language.slice(0, 2)
    const lang = window.localStorage.getItem('lang') || config.lang.includes(browserLang) ? browserLang : 'en'
    console.log(lang)
    // window.location += prefixLink(`${lang}/`)
    browserHistory.push(prefixLink(`${lang}/`))
  }
  render () {
    return (
      <div>
          no javascript message here...
      </div>
    )
  }
}
