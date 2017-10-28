import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";
import {Provider} from 'react-redux';

function renderApp() {
  render(<Provider store={store}><App /><Provider>,
  document.getElementById('root'));
}
rederApp();

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
    />,
  document.getElementById("root")
);
