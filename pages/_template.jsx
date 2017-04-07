import React from 'react'
import 'css/global-style.sass'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="react-root">
        <div className="fluxbg" />
        {this.props.children}
      </div>
    )
  },
})
