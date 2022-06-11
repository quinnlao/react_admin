import React, { useState } from 'react';
import './header.less';

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className='header'>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        》展开
      </button>
    </div>
  )
}
