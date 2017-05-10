import { createStore } from "redux";
import state from "./state.js";
import reducers from "./reducers";



const store = createStore(state,reducers);

export default store;
