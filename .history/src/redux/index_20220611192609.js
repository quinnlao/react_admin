import { legacy_createStore as createStore, applyMiddleware,combineReducers } from 'redux';
import  setCollapsed from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { SET_COLLAPSED } from './action';
const reducer ={
    setCollapsed
};

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));