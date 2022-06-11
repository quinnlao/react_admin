import React, {  PureComponent } from 'react'
import Input from './components/Input'
import './list.css'
export default class List extends PureComponent {
  constructor() {
    super()
    this.state = {
      flag: false,
      list: [
        {
          id: 1,
          content: '哈哈哈',
          checked: false
        },
        {
          id: 7,
          content: '哈哈哈',
          checked: false
        },
        {
          id: 5,
          content: '哈哈哈',
          checked: false
        },
      ],
      checkAll: false,
      selectLength: 0,
      item: {}
    }
  }
  // 添加 
  addHandler = (obj)=>{
    let { list } = this.state;
    let newList = [...list,obj]
    console.log('newList===='+newList)
    this.setState({
      list: newList,
    })
  } 
  // 搜索
  searchHandler=(content)=>{
    console.log("content",content);
    let { list } = this.state;
    let newList = list.filter(item => item.content.includes(content))
    this.setState({
      list: newList
    })
  }
  // 删除
  delHandler = (id)=> {
    console.log("id",id);
    const { list } = this.state
    const newList = list.filter(item => item.id !=id)
    let checkAll = newList.length && newList.every(item => item.checked)
    this.setState(() => ({list: newList,checkAll}))
  }
  // 编辑
  editHandler = (items)=>{
    this.setState({
      item: items
    })
  }
  // 更新
  update = (content)=>{
    const { list,item } = this.state
    let obj = Object.assign(item,{content})
    const newList = list.map(v =>{
      if(v.id === obj.id) {
        v = {...obj}
      }
      return v
    })
    this.setState({
      list: newList,
      item: obj
    })
  }
  // 已完成 
  // doneLenth=()=> {
  //   const { list } = this.state
  //   const newList = list.filter(item => item.checked)
  //   let selectLength = newList.length
  //   setTimeout(()=>{
  //     this.setState({
  //       selectLength
  //     })
  //   })
  // }
  // 挂载
  componentDidMount() {
    this.unSubscribe = $bus.addListener("getFlag",(flag)=>{
      this.setState({flag})
    })
    this.unSubscribe1 = $bus.addListener("sendValue",(obj)=>{
     this.addHandler(obj)
    })
    this.unSubscribe2 = $bus.addListener("searchValue",(value)=>{
     this.searchHandler(value)
    })
    this.unSubscribe3 = $bus.addListener("getItem",(item)=>{
     this.editHandler(item)
    })
    this.unSubscribe4 = $bus.addListener("update",(content)=>{
     this.update(content)
    })
  }
  // 卸载
  componentWillUnmount() {
    $bus.removeListener(this.unSubscribe)
    $bus.removeListener(this.unSubscribe1)
    $bus.removeListener(this.unSubscribe2)
    $bus.removeListener(this.unSubscribe3)
    $bus.removeListener(this.unSubscribe4)
  }
  render() {
    let { flag, list,checkAll } = this.state
    return (
      <div className='container'>
        {/* 输入框 */}
        <Input></Input>
        {/* 列表 */}
        <List list={list} checkHandler={this.checkHandler} delHandler={this.delHandler}></List>
        {/* 统计 */}
      </div>
    )
  }
}

