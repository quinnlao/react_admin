import { SET_COLLAPSED } from './action'
// store初始化仓库数据
const initState = false;
// reducer纯函数，用于操作中央仓库的数据
export default function setCollapsed(prestate = initState, action) {
    const { type, data } = action;
    // let newState;
    switch (type) {
        case SET_COLLAPSED:
            // newState = !initState
            return !prestate
        default:
            return prestate
    };
}
