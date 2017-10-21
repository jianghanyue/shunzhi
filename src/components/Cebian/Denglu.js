import React, { Component } from 'react'
import {
  Link
 } from 'react-router-dom'

class Denglu extends Component {
  render () {
    return (
      <Link className='denglus' to='/login' onClick={this.props.tan}>
        登录
      </Link>
    )
  }
}
export default Denglu
