import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Row } from 'react-bootstrap-externaljs'


export default class HomePage extends Component {
  render () {
    return (
      <Grid>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    )
  }
}

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
}
