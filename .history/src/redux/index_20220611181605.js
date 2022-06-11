
import { legacy_createStore as createStore } from 'redux';
import { SET_COLLAPSED } from './action';

function store(state = { isCollapsed: true, }, action) {

}
export default createStore(store)