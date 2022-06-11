
export const SET_COLLAPSED = 'set_collapsed'

export function setCollapsed(n) {
    return {
        type: SET_COLLAPSED,
        n: n
    }
}