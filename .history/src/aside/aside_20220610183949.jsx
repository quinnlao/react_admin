import React,{use}from 'react';
import './aside.less';

export default function Aside() {
    
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);
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
