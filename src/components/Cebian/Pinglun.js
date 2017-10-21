import React, { Component } from 'react'
import {
  Link
 } from 'react-router-dom'

class Pinglun extends Component {
  render () {
    return (
        <Link to='/news' onClick={this.props.tan}>首页</Link>
    )
  }
}
export default Pinglun
