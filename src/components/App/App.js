import React, { Component } from 'react'
import './App.css'
import Home from '../Home/Home'
import Ind from '../Ind/Ind'
import Signup from '../Login/Signup'
import Login from '../Login/Login'
import Cebian from '../Cebian/Cebian'
import News from '../News/News'
import {
  HashRouter as Router,
  Route,
  Redirect
 } from 'react-router-dom'
import store from '../../redux/store'
import Like from '../Like/Like'
import Xiangqing from '../Xiangqing/Xiangqing'
import Cart_float from '../Cart_float/Cart_float'
import Cart from '../Cart/Cart'
import Firend from '../Firend/Firend'

class App extends Component {
  componentDidMount = () => {
      if(window.localStorage.getItem('UserName')){
        const path = true
        store.dispatch({type: 'UPDATA_DENGLU', path})
        const pather = store.getState().yonghu.find(t => t.name==window.localStorage.getItem('UserName')).deit
        store.dispatch({type: 'UPDATA_DEIT', pather})
        const pathsan = window.localStorage.getItem('UserName')
        store.dispatch({ type: 'UPDATA_USERNAME', pathsan})
      }
  }
  render() {
    return (
          <Router>
            <div className='app'>
              <Cebian />
              {store.getState().data.length!=0 && <Cart_float />}
              <Route exact path='/' component={Ind} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/home'  render={() => {
                if (!window.localStorage.getItem('UserName')) {
                  return <Redirect to='/login' />
                } else {
                  return <Home />
                }
              }} />
              <Route path='/news' render={() => {
                if (!window.localStorage.getItem('UserName')) {
                  return <Redirect to='/login' />
                } else {
                  return <News />
                }
              }} />
              <Route path='/like' component={Like} />
              <Route path='/xiangqing/:id' component={Xiangqing} />
              <Route path='/cart'  render={() => {
                if (!window.localStorage.getItem('UserName')) {
                  return <Redirect to='/login' />
                } else {
                  return <Cart />
                }
              }} />
              <Route path='/firend/:id'  render={() => {
                if (!window.localStorage.getItem('UserName')) {
                  return <Redirect to='/login' />
                } else {
                  return <Firend />
                }
              }} />
            </div>
        </Router>
            )
          }
        }

export default App
