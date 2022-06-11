
export const SET_COLLAPSED = 'set_collapsed'

export function setCollapsed(n) {
    return {
        type: SET_COLLAPSED,
        n: n
    }
}
export const createIncrementAction=(data)=>{
    return {type:INCREMENT,data}
}