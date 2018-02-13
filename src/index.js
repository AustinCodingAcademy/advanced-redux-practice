import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import {Provider} from 'react-redux';
import App from "./App";
import "./index.css";
import state from "./state";

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
