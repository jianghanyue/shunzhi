import React, { Component } from 'react'
import './Cart.css'
import Top from '../Top/Top'
import store from '../../redux/store'
import { withRouter } from 'react-router'

class Cart extends Component {
  state = {
    data:[],
    tittle: '购物车'
  }
  calTotal = (commodity) => {
    const total = commodity.reduce((sum,t) => {
      return sum + t.jiage * t.shuliang
    },0)
    return total
  }
  suanClick = (text,t) => {
  let newcommodity = store.getState().data
  if(text=='-'){
    if(t.shuliang>0){
      newcommodity.find(re => re.id==t.id).shuliang--
      const path = newcommodity
      store.dispatch({ type: "UPDATA_DATA_SUAN", path})
    }
  }else{
    newcommodity.find(re => re.id==t.id).shuliang++
    const path = newcommodity
    store.dispatch({ type: "UPDATA_DATA_SUAN", path })
  }
  console.log(newcommodity)
}
  handleClick = () => {
    alert('欢迎下次购物')
    store.dispatch({ type: "GAI_DATA"})
    this.props.history.push('/')
  }
  render () {
    const commodity = store.getState().data
    const total = this.calTotal(commodity)
    const list = store.getState().data.map( t => (
      <div className="cart_item" key={t.id}>
        <div className="cart_info">
          <div className="cart_poster" style={{backgroundImage:`url(${t.poster})`}}></div>
          <div className="price_name">
            <div className="item_name">{t.name}</div>
            <div className="item_price">{t.jiage}</div>
          </div>
        </div>
        <div className="suan">
          <div className="jian" onClick={()=> this.suanClick('-',t)}>-</div>
          <div className="count">{t.shuliang}</div>
          <div className="jia" onClick={()=> this.suanClick('+',t)}>+</div>
        </div>
      </div>
    ))
    console.log(total);
    return (
      <div className='cart'>
        <Top tittle={this.state.tittle}/>
        <div className="cart_main">
          <div className="cart_hero">
            <h1>{`${total ? total : '0.00'} 元`}</h1>
          </div>
          <div className="cart_list">
            <div className="cart_list_item">
              {list}
            </div>
            <div className="cart-checkout-button" onClick={this.handleClick}>结算</div>
          </div>

        </div>
      </div>
    )
  }
}
export default withRouter(Cart)
