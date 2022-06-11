 
import {legacy_createStore as createStore} from 'redux';
import { SET_COLLAPSED } from './action';

function store(state = { isCollapsed: true,}, action) {
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