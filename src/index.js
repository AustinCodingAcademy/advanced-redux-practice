import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";
import { Provider } from "react-redux";
import {createStore,combineReducers} from "redux";


const store = createStore(reducers,state);

const reducers = combineReducers({
  newComments
});

const {
dateTime,
newComments,
newTasks,
newOrders,
tickets,
orders,
taskItem,
tasks,
messages
} = state;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

    ,
  document.getElementById("root")
);
