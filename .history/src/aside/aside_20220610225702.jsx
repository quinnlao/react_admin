import React, { useState } from 'react';
import './aside.less';

function Aside(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const getNav = () => {
        if (isCollapsed) {
            return (
                <div
                    className='aside'
                    style={{ width: '15%' }}
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
                <div
                    style={{
                        width: '3%',
                        height: '100%',
                        backgroundColor: '#fff',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                    }}
                ></div>
            )
        };
    };
    return (
        <div>
            {getNav()}
        </div>
    )
};
export default Aside;
