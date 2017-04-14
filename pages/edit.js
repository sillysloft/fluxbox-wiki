/* global document */
import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Alert, Grid } from 'react-bootstrap-externaljs'

exports.data = {
  title: 'Editor',
  path: '/edit/',
}

export default class Index extends React.Component {
  componentDidMount () {
    const diff = document.createElement('script')
    diff.src = '//fluxbox-wiki.dev.lncr/static/diff.js'
    const editor = document.createElement('script')
    editor.src = '//fluxbox-wiki.dev.lncr/static/editor.js'

    document.head.appendChild(diff)
    document.head.appendChild(editor)
  }
  render () {
    return (
      <Grid>
        <pre id="display" />
        <pre id="hidden" />
        <pre id="result" />
        <style
          dangerouslySetInnerHTML={{ __html: `
          #hidden {
            display: none;
          }
          #hidden, #display {
            white-space: pre-wrap;
            word-wrap: break-word;
            -webkit-user-modify: read-write-plaintext-only;
          }
          del {
            text-decoration: none;
            color: #b30000;
            background: #fadad7;
          }
          ins {
            background: #eaf2c2;
            color: #406619;
            text-decoration: none;
          }` }}
        />
        <script src="//fluxbox-wiki.dev.lncr/static/diff.js" />
        <script src="//fluxbox-wiki.dev.lncr/static/editor.js" />
        <script src={prefixLink('editor.js')} />
        <script src={prefixLink('markdown-it.min.js')} />
      </Grid>
    )
  }
}
