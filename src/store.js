import { createStore } from 'redux';
import state from "./state";
import reducers from "./reducers/index";

export default createStore(reducers, state);