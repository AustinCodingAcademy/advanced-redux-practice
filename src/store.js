import {createStore} from "redux";
import reducer from "./reducers";
import state from "./state";

const {
newComments,
newTasks,
newOrders,
tickets,
orders,
tasks,
messages
} = state;

const store = createStore(reducer, {
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  tasks,
  messages
});

export default store;
