import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './header.less';

export default function Header() {
  // 获取中央仓库中的isLogin数据
  const isLogin = useSelector(state => state.isCollapsed)

  // 修改中央仓库数据
  const dispatch = useDispatch()
  
  dispatch({ type: 'SET_COLLAPSED', data: false })
  return (
    <div className='header'>
      {/* onClick={() => setIsCollapsed(!isCollapsed)} */}
      <button className='button'>
        》展开
      </button>
    </div>
  )
}
