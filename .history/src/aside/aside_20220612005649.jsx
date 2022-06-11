import React, { Fragment, useState, useEffect } from 'react';
import store from '../redux/index';
import './aside.less';

function Aside() {
    const [isCollapsed, setIsCollapsed] = useState(store.getState().setCollapsed);

    useEffect((isCollapsed) => {
        if (isCollapsed != store.getState().setCollapsed) {
            setIsCollapsed(store.getState().setCollapsed)
        }
    })
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
                    </ul>
                </div >
            )
        } else {
            return (
                <div
                    style={{
                        width: '3%',
                        height: '100%',
                        backgroundColor: '#f5f4f4',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <p
                        style={{
                            marginTop: '50px'
                        }}
                    >导航</p>
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
