import React from 'react';
import { SET_COLLAPSED } from '../redux/action';
import store from '../redux/index';
import './header.less';

export default function Header() {
  const isCollapsed = store.getState();
  console.log(isCollapsed);

  return (
    <div className='header'>
      <button className='button' onClick={() => store.dispatch(setCollapsed(value*1))}>
        》展开
      </button>
    </div>
  )
}
