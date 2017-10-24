import React, { Component } from 'react'
import './Pinglun.css'
import store from '../../redux/store'

class Pinglun extends Component {
  state = {
    pinglun:store.getState().shangpin.find( t => t.id == this.props.id).pinglun,
    sss:'',
    firend:[]
  }
  onChange = (e) => {
    this.setState({
      sss:e.target.value
    })
  }
  handleClick = () => {
    if(this.state.sss.trim()){
    this.setState({
      pinglun:[...this.state.pinglun,{text:this.state.sss,name:store.getState().username}],
      sss:''
    })
    let data = this.props.data
    let id = this.props.id
    data.pinglun = [...data.pinglun,{text:this.state.sss,name:store.getState().username,id:this.state.pinglun.length+1}]
    const firend = store.getState().yonghu.find( t => t.name === store.getState().username).firend
    store.getState().yonghu.map( t => {
      if(firend.find( val => val.name==t.name )){
        const yh = t
        yh.haoyoudongtai=[...yh.haoyoudongtai,{text:this.state.sss,name:store.getState().username,img:this.props.data.poster,id:t.haoyoudongtai.length+1}]
      }
    })
    }
  }
  render () {
    const list = this.state.pinglun.map( t =>
      (<li key={t.id}>
        <div className="pic"></div>
        <div className="comment-item">
          <div className="user-time">
            <div className="com-user-name">{t.name}</div>
            <div className="com-user-time"></div>
          </div>
          <div className="comment-content">{t.text}</div>
        </div>
      </li>)
    )
    return (
      <div className='pinglun'>
        <h1>评论区</h1>
        <p className='dish-sub-detail'>评论数：{this.state.pinglun.length}</p>
        {list}
        <div className="comment">
          <div className="comment-form">
            <input type="text" value={this.state.sss} onChange={this.onChange}/>
            <button type='submit' onClick={this.handleClick}>评论</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Pinglun
