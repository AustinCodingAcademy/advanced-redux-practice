import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";
import reducers from "./reducers/index";
import {Provider } from "react-redux";
import store from "./store";
import { createStore } from 'redux'

let store = createStore(reducers,state)



ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>
  ,document.getElementById("root")
);
