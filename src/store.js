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

const store = createStore(reducer, {
  tasks,
  messages
});
