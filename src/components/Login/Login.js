import React, { Component } from 'react'
import './Login.css'
import Top from '../Top/Top'
import {
  Link
 } from 'react-router-dom'
import store from '../../redux/store'
import axios from 'axios'


class Login extends Component {
  state = {
    tittle:'登录'
  }
  tanClick = () => {
    const path = !store.getState().tan
    store.dispatch({ type: 'UPDATA_TAN', path })
  }

  denglClick = (username) => {
    if(store.getState().yonghu.find(t => t.name==username)){
      window.localStorage.setItem('UserName', username)
      const path = true
      store.dispatch({type: 'UPDATA_DENGLU', path})
      this.props.history.push('/news')
      const pather = store.getState().yonghu.find(t => t.name==username).deit
      store.dispatch({type: 'UPDATA_DEIT', pather})
    }else{
      alert("请填写正确用户名")
  }}
  render () {
    return (
      <div className='login'>
        <Top tittle={this.state.tittle}/>
        <div className="denglu">
          <div>
            <h2>吮指demo<br />（点击登录即可）</h2>
            <span>链接小而确定的幸福</span>
          </div>
          <div className="inpt">
            <div>
              <input type="text" placeholder='用户名' value={store.getState().username} />
              <input type="password" placeholder='密码'/>
            </div>
          </div>
          <a className="dl" href="javascript:;" onClick={() => this.denglClick(store.getState().username)}>登录(点我即可)</a>
          <div className="di"><Link to="/signup">没有账号？请先注册</Link></div>
        </div>
      </div>
    )
  }
}
export default Login
