import React, { Fragment, useState } from 'react';
import store from '../redux/index';
import './aside.less';

import React, { Component } from 'react';

class Aside extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Aside;
function Aside() {
    const [isCollapsed, setIsCollapsed] = useState(store.getState().setCollapsed.isCollapsed);
    console.log(store.getState().setCollapsed.isCollapsed);
    
};
export default Aside;
