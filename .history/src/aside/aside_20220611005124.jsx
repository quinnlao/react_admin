import React, { Fragment, useState } from 'react';
import './aside.less';

function Aside() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const getNav = () => {
        if (isCollapsed) {
            return (
                <div
                    className='nav'
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
                        textAlign: '100%'
                    }}
                >
                    导航
                </div>
            )
        };
    };
    return (
        <Fragment>
            {getNav()}
        </Fragment>
    )
};
export default Aside;
