import {createStore} from 'redux';
import state from "./state";
import rootReducer from "./reducers";

const store = createStore(rootReducer,state);


export default store;
