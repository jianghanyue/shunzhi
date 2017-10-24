import React, { Component } from 'react'
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import store from '../../redux/store'
import axios from 'axios'

class Toggles extends Component {
  state = {
    baconIsReady: false
  }
  onchange = (event) =>{
    const t = this.props.t
    if(this.state.baconIsReady){
        let firend = t
        firend.firend = firend.firend.filter( re => re.name !== store.getState().username)
        console.log(firend);
        axios.put(`http://localhost:3012/yonghu/${t.id}`,firend).then( res => {
        })
        this.setState({
          baconIsReady: false
        })
      }else{
        let firend = t
        firend.firend = [...t.firend,{name: store.getState().username}]
        console.log(firend);
        axios.put(`http://localhost:3012/yonghu/${t.id}`,firend).then( res => {
        })
        this.setState({
          baconIsReady: true
        })
      }
  }
  componentDidMount = () => {
    if(this.props.t.firend.find( t => t.name === store.getState().username )){
      this.setState({
        baconIsReady: true
      })
    }else{
      this.setState({
        baconIsReady: false
      })
    }
  }
  render () {
    // console.log(this.props.t.firend.find( t => t.name === store.getState().username ));
    return (
        <label>
          <Toggle
            onChange={ event => this.onchange(event) }
            checked={this.state.baconIsReady}
          />
        </label>
    )
  }
}
export default Toggles
