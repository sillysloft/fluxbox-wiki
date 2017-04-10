/* global window */
import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import styles from 'css/footer.module.sass'

import { pages } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  openEditWindow (evt) {
    evt.preventDefault()
    window.open('/edit/', '_blank', 'toolbar=no,menubar=no,titlebar=no,height=600,width=800')
  },
  render () {
    const page = pages.filter(p => p.path).find(p => [p.path, prefixLink(p.path)].includes(this.props.location))||{ file: '', requirePath: '' }
    // debugger
    return (
      <div className={styles.footer}>
        fluxbox-wiki.org
        <a style={{ float: 'right' }} href={`https://github.com/sillyslux/fluxbox-wiki/blob/master/pages/${page.requirePath}`}>edit at github</a>
        <a style={{ float: 'left' }} href="/live-editor" onClick={this.openEditWindow}>eddy</a>
      </div>
    )
  },
})
