import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { prefixLink } from 'gatsby-helpers'

import Navigation from 'custom/Navigation'
import NavigationEditor from 'custom/NavigationEditor'
import NavigationIframe from 'custom/NavigationIframe'
import Footer from 'custom/Footer'

import 'css/global-style'

let location

const checkPath = paths => ![].every.call((Array.isArray(paths) && paths) || [paths],
  path => ![path, prefixLink(path)].includes(location))

export default class BaseTemplate extends Component {
  render () {
    location = this.props.location.pathname
    return (
      <div className="react-root">
        {{
          [prefixLink('/iframe/')]: <NavigationIframe location={location} />,
          [prefixLink('/edit/')]: <NavigationEditor location={location} />,
        }[location]||<Navigation location={location} />}
        <div className="fluxbg" />
        {this.props.children}
        {checkPath('/iframe/') ? '' : <Footer location={location} />}
      </div>
    )
  }
}
