import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers";
//where the data goes

var store = createStore(reducers,state);

export default store;
