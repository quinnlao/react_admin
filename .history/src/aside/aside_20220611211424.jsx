import React, { Fragment, useState } from 'react';
import store from '../redux/index';
import './aside.less';

rv
function Aside() {
    const [isCollapsed, setIsCollapsed] = useState(store.getState().setCollapsed.isCollapsed);
    console.log(store.getState().setCollapsed.isCollapsed);
    const getNav = () => {
        // setIsCollapsed(store.getState().setCollapsed.isCollapsed);
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
