import React from 'react';
import './header.less';

export default function Header() {
  return (
    <div className='header'>
      <button onClick={isCollapse}>
        》展开
      </button>
    </div>
  )
}
