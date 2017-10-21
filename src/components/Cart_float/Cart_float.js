import React, { Component } from 'react'
import './Cart_float.css'
import gouwuche from './gouwuche.svg'
import {
  Link
 } from 'react-router-dom'
import store from '../../redux/store'

class Cart_float extends Component {
  render () {
    return (
      <Link className='cart_float' to='/cart'>
        <div className="cart_no">{store.getState().data.length}</div>
        <img src={gouwuche} alt=""/>
      </Link>
    )
  }
}
export default Cart_float
