import { legacy_createStore as createStore ,applyMiddleware, combineReducers} from 'redux';
import { setCollapsed } from './reducer';

import {composeWithDevTools} from 'redux-devtools-extension'
// import { SET_COLLAPSED } from './action';

function store() {

}
// export default createStore(setCollapsed)
export default createStore(setCollapsed,composeWithDevTools(applyMiddleware(thunk)));