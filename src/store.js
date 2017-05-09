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

const store = createStore(reducer,{
  tasks,
  messages,
  taskItem,
  orders,
  tickets,
  newOrders,
  newTasks,
  newComments,
  dateTime
});

export default createStore(
  reducer,
  {
    tasks,
    messages,
    taskItem,
    orders,
    tickets,
    newOrders,
    newTasks,
    newComments,
    dateTime
  },
  window._REDUX_DEVTOOLS_EXTENSION_ && window._redux()
);
