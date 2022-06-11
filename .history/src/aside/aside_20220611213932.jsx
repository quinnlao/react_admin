import React, { Fragment, useState, useEffect } from 'react';
import store from '../redux/index';
import './aside.less';

function Aside() {
    const [isCollapsed, setIsCollapsed] = useState(store.getState().setCollapsed);
    setCount(count => {
        if (count === 1) {
          clearInterval(timer)
          setCount(10)
        }
        return count - 1
      })
————————————————
版权声明：本文为CSDN博主「yezi153」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/yezi153/article/details/121275579
    console.log(isCollapsed);
    useEffect(() => {
        setIsCollapsed(store.getState().setCollapsed);
    }, [isCollapsed])
    // setIsCollapsed(store.getState().setCollapsed);
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
                    }}
                >
                    导航
                </div>
            )
        };
    };
    // setIsCollapsed(store.getState().setCollapsed.isCollapsed);
    return (
        <Fragment>
            {getNav()}
        </Fragment>
    )
};
export default Aside;
