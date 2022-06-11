import React, { useState } from 'react';
import './aside.less';

function Aside(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    // const style = {
    //     collapsed: {
    //         display: "none",
    //         width: '10%'
    //     },
    //     expanded: {
    //         display: "block",
    //         width: '25%'
    //     },
    // };
    const getNav = () => {
        if (isCollapsed) {
            return (
                <div
                    style={{width:'15%'}}
                // style={isCollapsed ? style.collapsed : style.expanded}
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
                </div >
            )
} else {
    return (
        <div style={{width:'10%'}}></div>
    )
};
    };
return (
    <div className='aside'>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>an</button>
        {getNav()}
    </div>
)
};
export default Aside;
