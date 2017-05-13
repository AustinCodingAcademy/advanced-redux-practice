import {createStore} from "redux";
import reducers from "./reducers";
import state from "./state";

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

export default createStore(reducers,
  {
    dateTime,
    newComments,
    newTasks,
    newOrders,
    tickets,
    orders,
    taskItem,
    tasks,
    messages
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
