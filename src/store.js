import {createStore} from "redux";
import reducer from "./reducers/index";
import state from "./state";

const {
  newComments,
  newTasks,
  newOrders,
  tickets,
  order,
  taskItem,
  tasks,
  messages
} = state;

const store = createStore(
  reducer, {
    newComments,
    newTasks,
    newOrders,
    tickets,
    order,
    taskItem,
    tasks,
    messages
  },
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
