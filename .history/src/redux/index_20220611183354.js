
import { legacy_createStore as createStore } from 'redux';
import {setCollapsed} from './reducer'
// import { SET_COLLAPSED } from './action';

function store() {

}
export default createStore(setCollapsed)