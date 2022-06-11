import React, { useState } from 'react';
import './header.less';

export default function Header() {
  const [collapse,]=useState() 
  collapse = () => { }
  return (
    <div className='header'>
      <button onClick={isCollapse()}>
        》展开
      </button>
    </div>
  )
}
