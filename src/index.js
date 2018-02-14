import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";
import store from "./store";
import {Provider} from "react-redux";

/*const {
dateTime,
taskItem
} = state;


taskItem={taskItem}
dateTime={dateTime}
*/


function renderApp(){
  render(
  <Provider store={store}><App

  /></Provider>,
  document.getElementById("root"));
}
renderApp();
