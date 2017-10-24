import {combineReducers} from "redux";

function dateTime(state = []) {
  return state;
}

function newComments(state = []) {
  return state;
}

function messages(state = []) {
  return state;
}

function newTasks(state = []) {
  return state;
}

function newOrders(state = []) {
  return state;
}

function orders(state = []) {
  return state;
}

function tasks(state = []) {
  return state;
}

function taskItem(state = []) {
  return state;
}

function tickets(state = []) {
  return state;
}

const rootReducer = combineReducers({
  dateTime,
  newComments,
  messages,
  newTasks,
  newOrders,
  orders,
  taskItem,
  tasks,
  tickets
});

export default rootReducer;
