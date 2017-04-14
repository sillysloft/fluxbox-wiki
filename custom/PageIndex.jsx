import React, { Component } from 'react'
import PropTypes from 'prop-types'

import pageInfo from 'utils/pageInfo'
import { pages } from 'config'
import { prefixLink } from 'gatsby-helpers'
import styles from 'css/pageindex.module.sass'

import { Link } from 'react-router'
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap-externaljs'

export default class PageIndex extends Component {
  render () {
    const { language } = pageInfo(this.props.location.pathname)
    const indexedPages = pages.filter(a => /WikiPages\/.+\/.?/.test(a.requirePath)&&a.file.name===language).sort((a, b) => a.data.title > b.data.title)
    const index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => ({ index: c, pages: [] }))
    indexedPages.forEach(p => index[p.data.title[0].toLowerCase().charCodeAt(0)-97].pages.push(p))
    const arr = index.map(i => (i.pages.length ? <a key={i.index} href={`#${i.index}`}>{i.index}</a> : <span style={{ opacity: 0.3 }} key={i.index}>{i.index}</span>))
    return (
      <Panel header={arr} className={styles.pageindex}>
        {index.map(o => (
          o.pages.length ?
            <Panel header={<h4 id={o.index}>{o.index}</h4>}>
              <ListGroup>
                {o.pages.map(p =>
                  <ListGroupItem>
                    <Link to={prefixLink(p.path)}>
                      {p.data.title}
                    </Link>
                  </ListGroupItem>,
                )}
              </ListGroup>
            </Panel>
          :
            ''
        ))}
      </Panel>
    )
  }
}
// .panel-heading {display:flex;justify-content:space-between}
// links {padding: 4px 8px;}
PageIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
