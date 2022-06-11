import React from 'react';
import {useSelector,useDispatch} from 'react-redux'	
import './header.less';

export default function Header() {
  // const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className='header'>
      {/* onClick={() => setIsCollapsed(!isCollapsed)} */}
      <button className='button'>
        》展开
      </button>
    </div>
  )
}
