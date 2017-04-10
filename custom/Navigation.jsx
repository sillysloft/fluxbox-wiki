/* global window */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import { Navbar, Nav, NavItem, InputGroup, Button, Glyphicon, FormGroup, FormControl } from 'react-bootstrap-externaljs'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import getPageProps from 'utils/pageInfo'
import PropTypes from 'prop-types'

import 'css/headroom.sass'
import 'css/navbar.sass'
import 'css/subnav-animation.sass'

import LanguageMenu from './LanguageMenu'

const NavItemRouted = item => (
  <LinkContainer to={item.link}>
    <NavItem eventKey={item.link}>{item.text}</NavItem>
  </LinkContainer>
)

export default class Navigation extends Component {
  render () {
    const { lang } = getPageProps(this.props.location)
    return (
      <Headroom>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={prefixLink('/')} className="text-muted">
                fluxbox<span className="navbar-logo" />wiki
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Form pullRight>
            <FormGroup bsSize="sm" id="duck-search">
              <InputGroup bsSize="sm" className="animated-input slideUp">
                <FormControl type="text" />
              </InputGroup>
              <Button bsStyle="primary" bsSize="sm">
                <Glyphicon glyph="search" />
              </Button>
            </FormGroup>
          </Navbar.Form>
          <Nav bsStyle="pills" pullRight>
            <NavItemRouted link={prefixLink(`/${lang}/wiki/`)} text="Users" />
            <NavItemRouted link={prefixLink(`/${lang}/devel/`)} text="Developers" />
            <LanguageMenu location={this.props.location} />
          </Nav>
        </Navbar>
      </Headroom>
    )
  }
}

Navigation.propTypes = {
  location: PropTypes.string.isRequired,
}
