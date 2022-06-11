import React from 'react';
import { SET_COLLAPSED } from 'react-redux';
import './header.less';

export default function Header() {
  // 获取中央仓库中的isLogin数据
  const isCollapsed = useSelector();
  console.log(isCollapsed);

  return (
    <div className='header'>
      <button className='button' onClick={() => !isCollapsed}>
        》展开
      </button>
    </div>
  )
}
