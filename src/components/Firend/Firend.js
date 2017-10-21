import React, { Component } from 'react'
import './Firend.css'
import Top from '../Top/Top'
import axios from 'axios'
import store from '../../redux/store'
import { withRouter } from 'react-router'

class Firend extends Component {
  state = {
    tittle: '用户',
    data:[],
    button:''
  }
  componentDidMount = () => {
    if(this.props.match.params){
    const { id } = this.props.match.params
    axios.get(`http://localhost:3012/yonghu/${id}`).then( res => {
      this.setState({
        data:res.data
      })
      if(res.data.firend.find(t => t.name===store.getState().username)){
        this.setState({
          button:'已为好友'
        })
      }else{
        this.setState({
          button:'加为好友'
        })
      }
    })
    }
  }
  handleClick = () => {
        if(this.state.button=='加为好友'){
        const { id } = this.props.match.params
        let firend = store.getState().yonghu.find( t => t.id == id )
        firend.firend = [...firend.firend,{name: store.getState().username}]
        axios.put(`http://localhost:3012/yonghu/${id}`,firend).then( res => {
        })
      }
      this.setState({
        button:'已为好友'
      })
  }
  render () {
    return (
      <div className='xiangqing'>
        <Top tittle={this.state.tittle}/>
        <div className="dish-info">
          <div className='tu' style={{backgroundImage:`url(${this.state.data.img})`}}></div>
          <div className="user-name">{this.state.data.name}</div>
          <div className="info-card">
            <div className="card-tittle">个性签名</div>
            <div className="slogans">{this.state.data.deit}</div>
          </div>
          <div className="firend" onClick={this.handleClick}>{this.state.button}</div>
        </div>
      </div>
    )
  }
}
export default withRouter(Firend)
