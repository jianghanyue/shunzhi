import React, { Component } from 'react'
import {
  Link
 } from 'react-router-dom'

class Shouye extends Component {
  render () {
    return (
        <Link to='/' onClick={this.props.tan}>首页</Link>
    )
  }
}
export default Shouye
