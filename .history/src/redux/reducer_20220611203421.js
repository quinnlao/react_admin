import { SET_COLLAPSED } from './action'
// 初始化数据
const initState = {
    isCollapsefalse
};
export default function setCollapsed(state = initState, action) {
    const { type, data } = action;
    let newstate;
    switch (type) {
        case SET_COLLAPSED:
            newstate = !state;
            return Object.assign({},state,{list:[...list]})
        default:
            return state
    };
}
