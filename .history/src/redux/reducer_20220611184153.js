import 
// store初始化仓库数据
const initState = false;
// reducer纯函数，用于操作中央仓库的数据
export const setCollapsed = (prestate = initState, action) => {
    const { type, data } = action
    switch (type) {
        case SET_COLLAPSED:
            return !initState
        default:
            return prestate
    }
}
