import {createStore} from 'redux';
import state from "./state.js";
import reducers from "./reducers/index.js";

var store = createStore(reducers,state);

export default store;
