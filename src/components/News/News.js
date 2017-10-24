import React, { Component } from 'react'
import './News.css'
import Top from '../Top/Top'
import {
  Link
 } from 'react-router-dom'
import store from '../../redux/store'
import plx from './plx.svg'
import axios from 'axios'
import List from './List'

class News extends Component {
  state = {
    tittle:'News',
    yonghu:[]
  }
  render () {
    console.log()
    const noUp = (
      <div className="no-update">
        暂无好友更新，可以直接去 <Link to='/like'>购物区</Link> 转转。
      </div>
    )
    const haoyoudongtai = store.getState().yonghu.find( t => t.name == store.getState().username ).haoyoudongtai
    return (
      <div className='news'>
        <Top tittle={this.state.tittle}/>
        <div>
          {haoyoudongtai.length !== 0 ? <List /> : noUp }
        </div>
      </div>
    )
  }
}
export default News
