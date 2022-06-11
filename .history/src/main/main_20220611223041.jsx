import React from 'react';
import List from './todoList/list'
import './main.less';

export default function Container() {
  return (
    <div className='main'>
      <List></List>
    </div>
  )
}
