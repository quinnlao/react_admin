
export const SET_AGE = 'set_age'
//姓名
export const SET_NSME='set_name'
//年龄  n 接收年龄
export function setAge(n) {
    return {
        type: SET_NSME,
        n: n
    }
}