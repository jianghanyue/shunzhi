import React, { Component } from 'react'
import store from '../../redux/store'
import plx from './plx.svg'
import axios from 'axios'
import {
  Link
 } from 'react-router-dom'

class List extends Component {
  state = {
    index:-1
  }
  handleClick = (i) => {
    if(this.state.index!=i){
      this.setState({
        index:i
      })
    }else{
      this.setState({
        index:-1
      })
    }
}
  render () {
    console.log(store.getState().yonghu);
    // const haoyoudongtai = this.props.yonghu||this.props.yonghu.find(t => t.name==store.getState().username).haoyoudongtai
    // console.log(haoyoudongtai);
    let list = null
    if(store.getState().yonghu.length !== 0){
    list = store.getState().yonghu.find(t => t.name==window.localStorage.getItem('UserName')).haoyoudongtai.map( (t,i) => (
      <div key={t.id} className={`feed-item ${this.state.index === i&&"ents"}`}>
        <div className={`feed-expand ${this.state.index === i&&"ent"}`}>{t.text}</div>
        <div className="feed-card">
          <div className="feed-card-header">
            <Link className="feed-user" to='/'>
              <div className="feed-avatar"></div>
              <div className="feed-user-info">
                <div className="feed-username">{t.name}</div>
                <div className="feed-time"></div>
              </div>
            </Link>
            <div className="feed-button" onClick={() => this.handleClick(i)}>
              <img src={plx} alt=""/>
            </div>
          </div>
          <Link className='feed-dish' to='/' style={{backgroundImage: `url(${t.img})`}}></Link>
        </div>
        <div className="dongtai-name">{t.name}</div>
      </div>
    ))}
    return (
      <div className='list'>
        {store.getState().yonghu&&list}
      </div>
    )
  }
}
export default List
