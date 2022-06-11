import React, { useState } from 'react';
import './header.less';

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className='header'>
      <button >
        》展开
      </button>
    </div>
  )
}
