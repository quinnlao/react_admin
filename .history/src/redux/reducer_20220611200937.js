import { SET_COLLAPSED } from './action'
// 初始化数据
const initState = { isCollapsed: false };

export default function setCollapsed(state = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SET_COLLAPSED:
            return {
                ...state,
                isCollapsed: false ? true : false
            }
        default:
            return state
    };
}
