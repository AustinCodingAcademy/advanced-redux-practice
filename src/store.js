import { createStore } from "redux";
import state from "./state";
import allReducers from "./reducers";

const store = createStore(allReducers, state);

export default store;
