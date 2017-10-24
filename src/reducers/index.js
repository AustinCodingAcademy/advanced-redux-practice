import {combineReducers} from "redux";


function messages(state = []) {
  return state;
}

function tasks(state = []) {
  return state;
}

function dateTime(state = []) {
  return state;
}

function newComments(state = []) {
  return state;
}


function newTasks(state = []) {
  return state;
}

function newOrders(state = []) {
  return state;
}

function tickets(state = []) {
  return state;
}

function orders(state = []) {
  return state;
}

function taskItem(state = []) {
  return state;
}



export default combineReducers({
  dateTime,
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  taskItem,
  tasks,
  messages
});
