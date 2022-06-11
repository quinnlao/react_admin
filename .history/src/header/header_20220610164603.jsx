import React, { useState } from 'react';
import './header.less';

export default function Header() {
  const [isCollapse,]=useState() 
  Collapse = () => { }
  return (
    <div className='header'>
      <button onClick={isCollapse()}>
        》展开
      </button>
    </div>
  )
}
