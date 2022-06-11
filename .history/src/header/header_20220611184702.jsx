import React from 'react';
import { SET_COLLAPSED } from '../redux/action';
import { store } from '../redux/index';
import './header.less';

export default function Header() {
  const isCollapsed = store.getS;
  console.log(isCollapsed);

  return (
    <div className='header'>
      <button className='button' onClick={() => !isCollapsed}>
        》展开
      </button>
    </div>
  )
}
