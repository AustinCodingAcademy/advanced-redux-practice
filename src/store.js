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

const store = createStore(
  reducer,
  {
    newComments,
    newTasks,
    newOrders,
    tickets,
    orders,
    tasks,
    messages
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
