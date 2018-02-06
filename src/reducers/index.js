import {combineReducers} from "redux";

const newComments = (state = 0, action) => {
  return state;
};

const newTasks = (state = 0, action) => {
  return state;
};

const newOrders = (state = 0, action) => {
  return state;
};

const tickets = (state = 0, action) => {
  return state;
};

const orders = (state = 0, action) => {
  return state;
};

const tasks = (state = 0, action) => {
  return state;
};

const messages = (state = 0, action) => {
  return state;
};

const rootReducer = combineReducers({
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  tasks,
  messages
});

export default rootReducer;
