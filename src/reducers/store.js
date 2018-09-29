//Import createStore from redux//
import {createStore} from 'redux';
//import state from state.js//
import state from "./state";
//import reducers from reducers/index//
import reducers from "./reducers";
//create store//
var store = createStore(reducers,state);
//export store//
export default store;