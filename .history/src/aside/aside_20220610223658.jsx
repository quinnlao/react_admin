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
        if(isCollapsed){
            return (

            )
        }else{
            return(

            )
        };
    };
    return (
        <div className='aside'>
            <button onClick={() => setIsCollapsed(!isCollapsed)}>an</button>
            
        </div>
    )
};
export default Aside;
