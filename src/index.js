import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";
import {Provider} from 'react-redux';
import store from './store';

const {
dateTime,
orders,
taskItem,
tasks,
messages
} = state;

ReactDOM.render(
  <Provider store={store}>
    <App 
      taskItem={taskItem}
      dateTime={dateTime}
      orders={orders} 
      messages={messages}
      tasks={tasks}
      />
    </Provider>,
  document.getElementById("root")
);
