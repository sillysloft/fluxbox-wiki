import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Markdown extends Component {
  render () {
    const post = this.props.route.page.data
    return (
      <div className="container">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }
}

Markdown.propTypes = {
  route: PropTypes.shape({
    page: PropTypes.shape({
      data: PropTypes.shape({
        body: PropTypes.string,
      }),
    }),
  }).isRequired,
}
