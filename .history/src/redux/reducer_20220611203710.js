import { SET_COLLAPSED } from './action'
// 初始化数据
const initState = {
    isCollapsed: false ? true : false
};
export default function setCollapsed(state = initState, action) {
    const { type, data } = action;
    let newstate;
    switch (type) {
        case SET_COLLAPSED:
            newstate = { isCollapsed: true };
            return newstate
        default:
            return state
    };
}
