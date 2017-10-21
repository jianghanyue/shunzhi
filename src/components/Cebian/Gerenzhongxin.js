import React, { Component } from 'react'
import {
  Link
 } from 'react-router-dom'

class Gerenzhongxin extends Component {
  render () {
    return (
      <Link className='gerenzhongxin' to='/home' onClick={this.props.tan}>
        个人中心
      </Link>
    )
  }
}
export default Gerenzhongxin
