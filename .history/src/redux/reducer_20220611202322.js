import { SET_COLLAPSED } from './action'
// 初始化数据
const initState = false;

export default function setCollapsed(state = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SET_COLLAPSED:
            return [state
        default:
            return state
    };
}
