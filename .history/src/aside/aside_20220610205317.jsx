import React,{useState}from 'react';
import './aside.less';

export default function Aside() {
   const [isCollapsed, setIsCollapsed] = useState(style.expanded);

   const style = {
    collapsed: {
      display: "none",
    },
    expanded: {
      display: "block"
    },
  };
    return (
        <div className='aside'
        style={isCollapsed ? style.collapsed : style.expanded}
        >
            <ul className='menu'>
                <li className='menuTitle'>一级菜单
                    <ul className='childMenu'>
                        <li>二级菜单</li>
                        <li>二级菜单</li>
                        <li>二级菜单</li>
                    </ul>
                </li>
                <li className='menuTitle'>一级菜单
                    <ul className='childMenu'>
                        <li>二级菜单</li>
                        <li>二级菜单</li>
                        <li>二级菜单</li>
                    </ul>
                </li>
                <li className='menuTitle'>一级菜单
                    <ul className='childMenu'>
                        <li>二级菜单</li>
                        <li>二级菜单</li>
                        <li>二级菜单</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
