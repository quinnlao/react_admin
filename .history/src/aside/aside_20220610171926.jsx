import React from 'react';
import './aside.less';

export default function Aside() {
    return (
        <div className='aside'>
            <ul>
                <li className='menuTitle'>一级菜单
                <ul className='chileM'>
                    <li></li>
                </ul>
                </li>
            </ul>
        </div>
    )
}
