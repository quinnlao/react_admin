import React, { useState } from 'react';
import './header.less';

export default function Header() {
  const [collapse,collapseChange]=useState();
  collapseChange = () => { }
  return (
    <div className='header'>
      <button onClick={collapseChange9}>
        》展开
      </button>
    </div>
  )
}
