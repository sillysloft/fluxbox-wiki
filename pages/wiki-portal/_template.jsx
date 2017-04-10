import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { pages } from 'config'
import { Grid, Col, Nav, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap-externaljs'
import pageInfo from 'utils/pageInfo'
import { LinkContainer } from 'react-router-bootstrap'

// import 'css/sidebar-left.sass'

const NavItemRouted = item => (
  <LinkContainer to={item.link}>
    <NavItem eventKey={item.link}>{item.text}</NavItem>
  </LinkContainer>
)

let location

export default class WikiPortal extends Component {
  render () {
    location = this.props.location.pathname
    const { page, language } = pageInfo(location)

    const indexedPages = pages.filter(a => /wiki\/.+\/.?/.test(a.requirePath)&&a.file.name===language)
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    const index = page.file.dir === 'wiki-portal/Index' ? (
      <ListGroup style={{ marginLeft: 0 }}>
        {indexedPages.map(a => (
          <ListGroupItem key={a.path}>
            <Link to={prefixLink(a.path)}>
              {a.data.title}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    ) : ''
    const navPages = {}
    const regex = new RegExp(`^wiki-portal/.+/${language}.md`)
    pages.filter(a => regex.test(a.requirePath))
      .forEach((p) => {
        const name = p.requirePath.split('/')[1]
        navPages[name]= { path: p.data.path, title: p.data.title }
      })
    return (
      <Grid>
        <Col xs={3} lg={2} className="sidebar sidebar-left">
          <Nav id="wiki-start" bsStyle="pills" stacked>
            <NavItemRouted link={prefixLink(navPages.Entry.path)} text={navPages.Entry.title} />
            <NavItemRouted link={prefixLink(navPages.Index.path)} text={navPages.Index.title} />
            <NavItemRouted link={prefixLink(navPages.About.path)} text={navPages.About.title} />
            <NavItemRouted
              link={prefixLink(navPages.Contribute.path)}
              text={navPages.Contribute.title}
            />
            <NavItemRouted link={prefixLink(navPages['Getting-Help'].path)} text={navPages['Getting-Help'].title} />
          </Nav>
        </Col>
        <Col xs={9} lg={10} className="wiki-portal">
          {this.props.children}
          {index}
        </Col>
      </Grid>
    )
  }
}

WikiPortal.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
