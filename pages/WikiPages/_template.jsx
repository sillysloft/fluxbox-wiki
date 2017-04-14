import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pageInfo from 'utils/pageInfo'
import cheerio from 'cheerio'
import styles from 'css/wiki-page.module.sass'
import { Nav, Panel, Grid, Col, Row } from 'react-bootstrap-externaljs'
import 'css/toc.sass'

export default class WikiPage extends Component {
  render () {
    const { page } = pageInfo(this.props.location.pathname)
    const $ = cheerio.load(page.data.body)
    let lastLevel = 0
    const headers = $('h1,h2,h3,h4')
    let htmlArray = headers.map(function buildnav (i) {
      const level = this.name[1]
      const isDropdown = headers[i+1]?headers[i+1].name[1]>level:false
      let html = ''

      if (level > lastLevel) {
        html += '<ul class="dropdown-menu">'
        if (level>lastLevel+1) html+='<li class="dropdown"><ul class="dropdown-menu">'.repeat(level-lastLevel-1)
      } else {
        html += '</li></ul>'.repeat(lastLevel - level)
        html += '</li>'
      }
      lastLevel = level
      return `${html}<li class="${isDropdown?'dropdown':''}"><a class="${isDropdown?'dropdown-toggle':''}" href="#${$(this).children().first().attr('id')}">${$(this).text()}</a>`
    }).get().join('')
    htmlArray += '</li></ul>'.repeat(lastLevel)
    htmlArray = htmlArray.slice(26, -5)

    return (
      <Grid className={styles['wiki-page']}>
        <Row>
          <Panel>
            <Col md={9}>
              {this.props.children}
            </Col>
            <Col bsClass="sidebar sidebar-right col" md={3}>
              <Nav
                id="spytoc"
                bsStyle="pills"
                stacked
                dangerouslySetInnerHTML={{ __html: htmlArray }}
                data-spy="affix"
                data-offset-bottom="120"
                data-offset-top="38"
              />
            </Col>
          </Panel>
        </Row>
      </Grid>
    )
  }
}

WikiPage.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
