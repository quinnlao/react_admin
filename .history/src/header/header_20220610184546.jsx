import React from 'react';
import './header.less';

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

  return (
    <div className='header'>
      <button >
        》展开
      </button>
    </div>
  )
}
