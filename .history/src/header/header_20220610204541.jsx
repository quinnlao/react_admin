import React from 'react';
import './header.less';

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(props.collapsed);
  con
  return (
    <div className='header'>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        》展开
      </button>
    </div>
  )
}
