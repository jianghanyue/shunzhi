import React, { Component } from 'react'
import './Home.css'
import pen from './pen.svg'
import Top from '../Top/Top'
import store from '../../redux/store'
import axios from 'axios'
import { withRouter } from 'react-router'
import Toggles from './Toggles'

class Home extends Component {
  state={
    deit:'还没有填写个性签名',
    bool:true,
    tittle:'个人主页',
    baconIsReady:true
  }
  handleSubmit = (e) => {
    const pather = e.target.value
    store.dispatch({type: 'UPDATA_DEIT', pather})
  }
  handleClick = () => {
    this.setState({
      bool:!this.state.bool
    })
    let deit = store.getState().yonghu.find(t => t.name===store.getState().username)
    deit.deit=store.getState().deit
    console.log(deit);
    axios.put(`http://localhost:3012/yonghu/${deit.id}`,deit).then(res => {

  })
}
  componentDidMount = () =>{
    axios.get('http://localhost:3012/yonghu').then(res => {
      console.log(res.data);
  })
  }
  onClick = (t) => {
    this.props.history.push(`/firend/${t.id}`)
  }
  render () {
    let list = ''
    if(store.getState().yonghu){
    const yonghu = store.getState().yonghu.filter(t => t.name!==store.getState().username)
    list = yonghu.map(t => (
      <li key={t.id}>
        <div style={{backgroundImage:`url(${t.img})`}}></div>
        <span  onClick={() => this.onClick(t)}>{t.name}</span>
        {store.getState().username && <Toggles t={ t }/>}
      </li>
    ))}
    return (
      <div className='home'>
        <Top tittle={this.state.tittle}/>
        <div className="mnn">
          <label>
            <input type="file"/>
          </label>
          <div className="name">
            <div className="username">{store.getState().username}</div>
            <div className={`slogan ${this.state.bool&&"display"}`}>{store.getState().deit}</div>
            <div className={`sloganer ${this.state.bool||"display"}`}>
              <input type="text" value={store.getState().deit} onChange={this.handleSubmit}/>
              <button onClick={this.handleClick}>保存</button>
            </div>
          </div>
          <div className="deit" onClick={this.handleClick}>
            <img src={pen} alt=""/>
          </div>
        </div>
        <div className="ul">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
