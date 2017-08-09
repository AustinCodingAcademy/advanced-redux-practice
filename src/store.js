import { createStore } from "redux";
import state from "./state";
import reducers from "./reducers";

let store = createStore(reducers, state);

export default store;
