import React, { useState } from 'react';
import './aside.less';

function Aside(props) {
    const [isCollapsed, setIsCollapsed] = useState(props.collapsed);

    const style = {
        collapsed: {
            display: "none",
            width: '10%'
        },
        expanded: {
            display: "block",
            width: '25%'
        },
    };
    const getNav=() => {
        
    }
    return (
        <div className='aside'>
            <button onClick={() => setIsCollapsed(!isCollapsed)}>an</button>
            <div
                style={isCollapsed ? style.collapsed : style.expanded}>
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
        </div>
    )
};
export default Aside;
