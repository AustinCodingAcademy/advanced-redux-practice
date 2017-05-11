import {createStore} from "redux";
import reducer from "./reducers";

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

export default createStore(
  reducer,
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

// export default store;
