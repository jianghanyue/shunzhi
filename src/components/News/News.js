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

componentWillMount = () => {
  axios.get('http://localhost:3012/yonghu').then( res => {
    this.setState({
      yonghu:res.data
    })
  })
}
  render () {
    console.log(666)
    const noUp = (
      <div className="no-update">
        暂无好友更新，可以直接去 <Link to='/like'>购物区</Link> 转转。
      </div>
    )
    // const haoyoudongtai = store.getState().yonghu.find(t => t.name==store.getState().username).haoyoudongtai
    // const list = haoyoudongtai.map( (t,i) => (
    //   <div key={t.id} className={`feed-item ${this.state.index === i&&"ents"}`}>
    //     <div className={`feed-expand ${this.state.index === i&&"ent"}`}>{t.text}</div>
    //     <div className="feed-card">
    //       <div className="feed-card-header">
    //         <Link className="feed-user" to='/'>
    //           <div className="feed-avatar"></div>
    //           <div className="feed-user-info">
    //             <div className="feed-username">{t.name}</div>
    //             <div className="feed-time"></div>
    //           </div>
    //         </Link>
    //         <div className="feed-button" onClick={() => this.handleClick(i)}>
    //           <img src={plx} alt=""/>
    //         </div>
    //       </div>
    //       <Link className='feed-dish' to='/' style={{backgroundImage: `url(${t.img})`}}></Link>
    //     </div>
    //     <div className="dongtai-name">{t.name}</div>
    //   </div>
    // ))
    return (
      <div className='news'>
        <Top tittle={this.state.tittle}/>
        <div>
          {/* {haoyoudongtai.length===0 ? noUp : list} */}
          {store.getState().yonghu && <List />}
        </div>
      </div>
    )
  }
}
export default News
