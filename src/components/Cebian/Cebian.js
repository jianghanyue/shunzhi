import React, { Component } from 'react'
import './Cebian.css'
import store from '../../redux/store'
import {
  Link
 } from 'react-router-dom'
import Gerenzhongxin from './Gerenzhongxin'
import Denglu from './Denglu'
import Shouye from './Shouye'
import Pinglun from './Pinglun'

class Cebian extends Component {
  tanClick = () => {
    const path = !store.getState().tan
    store.dispatch({ type: 'UPDATA_TAN', path })
  }
  outClick = () => {
    const path = false
    store.dispatch({ type: 'UPDATA_DENGLU', path})
    window.localStorage.removeItem('UserName')
  }
  render () {
    return (
      <div className="cebianlan">
        <div className={`cebian ${store.getState().tan&&"col"}`} onClick={this.tanClick}>
        </div>
        <div className={`tanchuang ${store.getState().tan&&"tan"}`}>
          <div className="bm" style={{backgroundImage: `url("http://media.haoduoshipin.com/yummy/default-avatar.png")`}}>
          </div>
          <div className={`yonghu ${store.getState().denglu&&'dengluyonghu'}`}>
            <a href="#">{store.getState().username}</a>|<Link to='/' onClick={this.outClick} className='tuichu'>退出</Link>
          </div>
          <div className="linkl">
            {store.getState().denglu ? <Pinglun tan={this.tanClick}/> : <Shouye tan={this.tanClick}/>}
            {store.getState().denglu ? <Gerenzhongxin tan={this.tanClick}/> : <Denglu tan={this.tanClick}/>}
            <Link to='/like' onClick={this.tanClick}>猜你喜欢</Link>
          </div>
          <div className="anniu">
            <button onClick={this.tanClick}>关闭</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Cebian
