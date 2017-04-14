import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { prefixLink } from 'gatsby-helpers'

import Navigation from 'custom/Navigation'
import NavigationEditor from 'custom/NavigationEditor'
import NavigationIframe from 'custom/NavigationIframe'
import Footer from 'custom/Footer'

import 'css/global-style'


const checkPath = (paths, location) => ![].every.call(
  (Array.isArray(paths) && paths) || [paths],
  path => ![path, prefixLink(path)].includes(location),
)

export default class BaseTemplate extends Component {
  render () {
    return (
      <div className="react-root">
        {{
          [prefixLink('/iframe/')]: <NavigationIframe location={this.props.location} />,
          [prefixLink('/edit/')]: <NavigationEditor location={this.props.location} />,
        }[this.props.location.pathname]||<Navigation location={this.props.location} />}
        <div className="fluxbg" />
        {this.props.children}
        {checkPath('/iframe/', this.props.location.pathname) ? '' : <Footer location={this.props.location} />}
      </div>
    )
  }
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
