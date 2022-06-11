import { SET_COLLAPSED } from './action'
// 初始化数据
const initState = {
    isCollapsed: false
};
export default function setCollapsed(state = initState, action) {
    const { type, data } = action;
    let newstate;
    let collapse;
    switch (type) {
        case SET_COLLAPSED:
            collapse = !state['isCollapsed'];
            newstate = { isCollapsed: collapse }
            return newstate
        default:
            return state
    };
}
