import React, { Component } from 'react'
import './Like.css'
import Top from '../Top/Top'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import axios from 'axios'
import {
  Link
 } from 'react-router-dom'
import pl from './pl.svg'
import store from '../../redux/store'

class Like extends Component {
  state = {
    tittle: '猜你喜欢'
  }
  onClick = (t) => {
    this.props.history.push(`/xiangqing/${t.id}`)
  }
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
    let list = store.getState().shangpin.map(t => (
      <div className='every' key={t.id} onClick={() => this.onClick(t)}>
        <div className="dish-card"  style={{backgroundImage: `url(${t.poster})`}}></div>
        <span>{t.name}</span>
        <span>{`${t.jiage} 元`}</span>
        <span><img src={pl} alt=""/><span> {t.pinglun.length}</span></span>
        <span>{t.address}</span>
        <div className="dish_desc"></div>
      </div>
    ))
    let slide = (
      <Slider {...settings}>
        {list}
      </Slider>
    )
    return (
      <div className='like'>
        <Top tittle={this.state.tittle}/>
        <div className="dishess">
          {store.getState().shangpin.length === 0 ? "" : slide}
        </div>
      </div>
    )
  }
}
export default Like
