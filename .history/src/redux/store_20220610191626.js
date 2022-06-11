 
import { createStore } from "redux";
//引入公用的方法
import { SET_COLLAPSED } from './action'

function user(state = { isCollapsed: 'blue', age: 18 }, action) {
    switch (action.type) {
        case SET_COLLAPSED:
            return {
                ...state,
                age: state.age + action.n,
                name: action.name
            }
        default:
            return state;
    }
}
export default createStore(user)