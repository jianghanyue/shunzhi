import React, { Component } from 'react'
import Caidan from './Caidan'
import './Top.css'
import store from '../../redux/store'

class Top extends Component {
  tanClick = () => {
    const path = !store.getState().tan
    store.dispatch({ type: 'UPDATA_TAN', path })
  }
  render () {
    return (
        <div className="top">
          <div className='caidan' onClick={this.tanClick}>
            <Caidan />
          </div>
          <span>{this.props.tittle}</span>
        </div>
    )
  }
}
export default Top
