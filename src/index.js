import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import "./index.css";
import state from "./state";
import store from "./store";


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
    <App
      taskItem={taskItem}
      dateTime={dateTime}
      newComments={newComments}
      newTasks={newTasks}
      newOrders={newOrders}
      tickets={tickets}
      orders={orders}
      messages={messages}
      tasks={tasks}
      />
  </Provider>,  
  document.getElementById("root")
);
