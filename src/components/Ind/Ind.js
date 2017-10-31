import React, { Component } from 'react'
import './Ind.css'
import shouzhi from './shouzhi.svg'
import {
  Link
 } from 'react-router-dom'

class Ind extends Component {
  render () {
    return (
      <div className='ind'>
        <div><img src={shouzhi} alt=""/></div>
        <h1>吮指demo<br />（点击登录即可）</h1>
        <span>享受舌尖艳遇</span>
        <div className="log">
          <Link to="/login">注册</Link>
          <Link to="/login">登录</Link>
        </div>
      </div>
    )
  }
}
export default Ind
