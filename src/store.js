import {createStore} from 'redux';
// the data from the database
import state from "./state";
import reducers from "./reducers";

var store = createStore(reducers,state);

export default store;
