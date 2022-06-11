import React,{useState}from 'react';
import './aside.less';

export default function Aside() {

    const [isCollapsed, setIsCollapsed] = useState(style.expanded);

    const style = {
        collapsed: {
          display: "none",
        },
        expanded: {
          display: "block"
        },
    };
    return (
        <div>
            
        </div>
    )
}
