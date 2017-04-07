import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Grid from 'react-bootstrap-externaljs/lib/Grid'

exports.data = {
  title: 'Fluxbox Wiki',
  path: '/en/',
}

export default class en extends React.Component {
  render () {
    return (
      <Grid>
        <div className="jumbotron">
          <Helmet
            title={`${config.siteTitle} | Start`}
          />
          <h1><a href="https://fluxbox.org">Fluxbox</a> Wiki</h1>
          <p><br />The Wiki for your beloved Window-Manager.</p>
          <p>There are 2 sections, <Link to={prefixLink('/en/wiki/')}>Fluxbox Users</Link> and <Link to={prefixLink('/en/devel/')}>Fluxbox Developers</Link>.</p>
          <p><Link to={prefixLink('/en/wiki/About-Fluxbox/')} className="btn btn-primary">Learn more</Link></p>
        </div>
      </Grid>
    )
  }
}

en.propTypes = {
  route: React.PropTypes.shape({
    pages: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  }).isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
}
