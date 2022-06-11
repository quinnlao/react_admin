import React, { Component, Fragment } from "react";
import './list.css'

class List extends Component {
  constructor() {
    super();
    this.state = {
      myList: [],
      myInput: ""
    }
  }

  UNSAFE_componentWillMount() {
    // 获取本地数据赋值给myList
    var myList = window.localStorage.getItem("myList");
    //判断myList是否是空的
    if (myList === null || myList === "") {
      myList = []
    } else {
      myList = myList.split(",")
    }
    //把转换过的数组赋值给this.setState名为myList
    this.setState({
      myList: myList
    })

  }
  //添加
  handleAddClick() {
    //拿到input的值
    var val = this.refs.myInput.value;
    //把input的值清空
    this.refs.myInput.value = this.state.myInput;
    //添加数据到this.state的myList
    this.setState({
      myList: [...this.state.myList, val]
    }, () => {
      //修改本地数据
      window.localStorage.setItem("myList", this.state.myList)
    })
  }
  //删除
  handleDeleteClick(index) {
    //获取this.state的myList数组，赋值给arr
    var arr = this.state.myList;
    //删除index下标的数据，1表示删除一条
    arr.splice(index, 1)
    this.setState({
      myList: arr
    }, () => {
      window.localStorage.setItem("myList", this.state.myList)
    })
  }
  //修改
  handleUpdateClick(index) {
    //获取this.state的myList数组，赋值给arr
    var arr = this.state.myList;
    //prompt获取要修改的内容
    var str = prompt("请输入修改内容");
    //判断是不是确认修改
    if (str != null) {
      //在arr数组中找到下标index,设置修改个数为1，修改的内容为str
      arr.splice(index, 1, str);
      //修改过后把this.state的myList数据修改成给改过的数据
      this.setState({
        myList: arr
      }, () => {
        //修改本地数据
        window.localStorage.setItem("myList", this.state.myList)
      })
    }
  }
  //清空
  handleClearClick() {
    //直接把this.state的myList赋值成为空数组
    this.setState({
      myList: []
    }, () => {
      window.localStorage.setItem("myList", this.state.myList)
    })
  }
  //绑定Enter
  keyDown(e) {
    //判断键盘按下的数字码是不是enter
    if (e.keyCode === 13) {
      //如果是enter的编码，执行添加的点击事件
      this.handleAddClick();
    }
  }

  render() {
    return (
      <Fragment className>
        <input className="input" ref="myInput" onKeyDown={this.keyDown.bind(this)} type="text" />
        <button onClick={this.handleAddClick.bind(this)}>添加</button>
        <button onClick={this.handleClearClick.bind(this)}>清空</button>
        <ul>
          {this.state.myList.map((m, index) => {
            return <li key={index}>{m}
              <button onClick={this.handleDeleteClick.bind(this, index)}>删除</button>
              <button onClick={this.handleUpdateClick.bind(this, index)}>修改</button>
            </li>
          }
          )}
        </ul>
      </Fragment>
    );
  }
}
export default List;

