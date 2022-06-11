import { SET_COLLAPSED } from './action'
// 初始化数据
const initState = false;

export default function setCollapsed(prestate = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SET_COLLAPSED:
            return {
                ...prestate
            }
        default:
            return prestate
    };
}
