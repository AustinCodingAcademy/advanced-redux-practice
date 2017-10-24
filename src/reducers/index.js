import {combineReducers} from "redux";

function messages(state = []) {
  return state;
}

function tasks(state = [] ) {
  return state;
}

function taskItem(state = []) {
  return state;
}

function orders(state = []) {
  return state;
}

function tickets(state = []) {
  return state;
}

function newOrders(state = []) {
  return state;
}

function newTasks(state = []) {
  return state;
}

function newComments(state = []) {
  return state;
}

function dateTime(state = []) {
  return state;
}

const rootReducer = combineReducers({
  messages,
  tasks,
  taskItem,
  orders,
  tickets,
  newOrders,
  newTasks,
  newComments,
  dateTime
});


export default rootReducer;
