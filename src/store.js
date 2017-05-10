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
    tasks,
    messages
  },

);

// export default store;
