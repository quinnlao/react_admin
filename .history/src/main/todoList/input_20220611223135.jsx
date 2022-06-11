import React, { Component } from 'react'
import { bus as $bus } from './bus'
export default class Input extends Component {
  constructor() {
    super()
    this.state = {
      value:""
    }
  }
  changeHandler = (e)=>{
    this.setState({
      value: e.target.value
    })
    console.log("this.state.value",this.state.value);
  }
  // 添加
  addHandler = ()=>{
    let { value } = this.state;
    let obj = {
      id: Date.now(),
      content: value,
      done: false
    }
    if(value) {
      $bus.emit("sendValue",obj)
    } else {
      console.log("请输入")
    }
  }
  // 搜索
  searchHandler = ()=>{
    console.log("搜索");
    let { value } = this.state;
    if(!value) return console.log("请输入");
    $bus.emit("searchValue",value)
  }
  render() {
    let { value } = this.state
    return (
      <>
        <div className="input">
          <input type="text" value={value} placeholder='请输入你的任务名称，按回车键确认' onInput={this.changeHandler}/>
          <button className="btn btn-success" onClick={this.addHandler}>添加</button>
          <button className="btn btn-primary" onClick={this.searchHandler}>搜索</button>
        </div>
      </>
    )
  }
}


