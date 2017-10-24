import React, { Component } from 'react'
import './Xiangqing.css'
import Top from '../Top/Top'
import gouwuche from './gouwuche.svg'
import { PieChart, Pie, Cell,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import store from '../../redux/store'
import Pinglun from '../Pinglun/Pinglun'

class Xiangqing extends Component {
  state = {
    xiaoliang:[
      {name: '3月', uv: 70, pv: 2400, amt: 2400},
      {name: '4月', uv: 100, pv: 1398, amt: 2210},
      {name: '5月', uv: 300, pv: 9800, amt: 2290},
      {name: '6月', uv: 200, pv: 3908, amt: 2000},
      {name: '7月', uv: 278, pv: 4800, amt: 2181}
],
    chengfen: [
      {
        name: '水分',
        value: 200,
        nv:200,
        bool:true,
        color:''
      },
      {
        name: '脂肪',
        value: 130,
        nv:130,
        bool:true,
        color:''
      },
      {
        name: '蛋白质',
        value: 100,
        nv:100,
        bool:true,
        color:''
      },
      {
        name: '糖分',
        value: 100,
        nv:100,
        bool:true,
        color:''
      }],
      newdata:[],
    data:store.getState().shangpin.find( t => t.id == this.props.match.params.id),
    tittle: '新品'
  }
  handleClick = (d,c,f) => {
    if(f){
      let newdata = this.state.chengfen
      newdata.find(t => t.name===d.name).bool=false
      newdata.find(t => t.name===d.name).color=c
      this.setState({
        chengfen:newdata,
        newdata:[...this.state.newdata,newdata.find(t => t.name===d.name)]
      })
    }
  }
  handleBuyClick = () => {
    console.log(this.state.data.completed)
    if(this.state.data.completed===false){
    const path = this.state.data
    store.dispatch({ type: 'UPDATA_DATA', path})
    const newdata = {...this.state.data,completed:true}
    this.setState({
      data:newdata
    })
    }
  }
  render () {
    let width = window.innerWidth - 40
    const data = this.state.chengfen
    const list = this.state.newdata.map(t => (
      <div key={t.name} className="inp" >
        <span style={{backgroundColor:t.color}}>{t.name}</span>
        <div style={{border:`2px solid ${t.color}`}}>{`${t.value} mg`}</div>
      </div>
    ))
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    return (
      <div className='xiangqing'>
        <Top tittle={this.state.tittle}/>
        <div className="dish-info">
          <div className="dish-img" >
            <div style={{backgroundImage:`url(${this.state.data.poster})`}}></div>
          </div>
          <div className="dish-info-card">
            <h1>{this.state.data.name}</h1>
            <div className="dish-info-card-img" onClick={this.handleBuyClick}><img src={gouwuche} alt=""/></div>
            <p>{this.state.data.address}</p>
            <h1 className='dish-tittle'>营养成分</h1>
            <p className='dish-deta'>点击各部分查看详情</p>
            <div className="pies">
              <PieChart width={300} height={300}>
                <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} fill="#82ca9d" dataKey="nv"
                >
                  {data.map((entry, index) => <Cell key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                    onClick={() => this.handleClick(entry,COLORS[index % COLORS.length],entry.bool)} />)}
                </Pie>
              </PieChart>
              <div className="li">
                {list}
              </div>
            </div>
            <div className="rec">
              <div>
                <span>销售额</span>
                <span>单位： 份</span>
              </div>
              <AreaChart width={width} height={200} data={this.state.xiaoliang}
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
              </AreaChart>
            </div>
            <Pinglun data={this.state.data} id={this.props.match.params.id}/>
          </div>

        </div>
      </div>
    )
  }
}
export default Xiangqing
