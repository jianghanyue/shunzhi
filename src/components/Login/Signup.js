import React, { Component } from 'react'
import './Login.css'
import Top from '../Top/Top'
import {
  Link
 } from 'react-router-dom'
import store from '../../redux/store'
import axios from 'axios'

class Signup extends Component {
  state = {
    tittle:'注册'
  }
  onChange = (e) => {
    const pathsan = e.target.value
    store.dispatch({ type: 'UPDATA_USERNAME', pathsan})
  }
  denglClick = (username) => {
    if(store.getState().yonghu.find(t => t.name==username)){
      alert("用户名重复")
    }else{
      if(username.trim()){
        const path = true
        store.dispatch({type: 'UPDATA_DENGLU', path})
        console.log(store.getState().denglu);
        this.props.history.push('/news')
        let data = {
          name:store.getState().username,
          img:"http://yummy.haoduoshipin.com/uploads/avatars/32471b42773f80eb6516b6390210a835",
          deit:'还没有填写个性签名',
          firend:[],
          haoyoudongtai:[]
        }
        axios.post('http://localhost:3012/yonghu', data).then(res => {
          console.log(res.data);
        })
        store.dispatch({ type: 'ADD_YONGHU', data})
      }else{
        alert("请填写正确用户名")
      }
      }
  }
  render () {
    return (
      <div className='login'>
        <Top tittle={this.state.tittle}/>
        <div className="denglu">
          <div>
            <h2>注册</h2>
            <span>链接小而确定的幸福</span>
          </div>
          <div className="inpt">
            <div>
              <input type="text" placeholder='用户名' value={store.getState().username} onChange={this.onChange}/>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='password'/>
              <input type="text" placeholder='再输一遍'/>
            </div>
          </div>
          <a className="dl" href='javascript:;' onClick={() => this.denglClick(store.getState().username)}>注册</a>
          <div className="di"><Link to="/login">已有账号？直接登录</Link></div>
        </div>
      </div>
    )
  }
}
export default Signup
