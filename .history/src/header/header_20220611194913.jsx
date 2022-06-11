import React from 'react';
import { setCollapsed } from '../redux/action';
import store from '../redux/index';
import './header.less';

export default function Header() {
  const isCollapsed = store.getState();
  console.log(isCollapsed);

  return (
    <div className='header'>
      <button className='button' onClick={() => store.dispatch(setCollapsed())}>
        
        {isCollapsed?"《折叠":"》展开"}
      </button>
    </div>
  )
}
