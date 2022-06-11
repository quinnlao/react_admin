import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { setCollapsed }z from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { SET_COLLAPSED } from './action';

export default createStore(setCollapsed, composeWithDevTools(applyMiddleware(thunk)));