import React from 'react';
import {useSelector,useDispatch} from 'react-redux'	;
import './header.less';

export default function Header() {
// 获取中央仓库中的isLogin数据
const isLogin = useSelector(state => state.isLogin)
	
// 修改中央仓库数据
const dispatch = useDispatch()
dispatch({type:'SET_LOGIN_STATUS',data:true})
————————————————
版权声明：本文为CSDN博主「清渡欢LL」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_39246667/article/details/124730558
  return (
    <div className='header'>
      {/* onClick={() => setIsCollapsed(!isCollapsed)} */}
      <button className='button'>
        》展开
      </button>
    </div>
  )
}
