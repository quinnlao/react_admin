 
import { createStore } from "redux";
import { SET_COLLAPSED } from './action';

function user(state = { isCollapsed: 'blue',}, action) {
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