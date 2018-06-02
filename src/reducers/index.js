import {combineReducers} from 'redux';

function tasks(state = [],action) {
  return state;
}
   
function newComments(state = 0,action) {
  return state;
}
function newTasks(state = 0,action) {
  return state;
}
function newOrders(state = 0,action) {
  return state;
}
function tickets(state = 0,action) {
  return state;
}




const rootReducer = combineReducers({
  tasks, newComments, newTasks, newOrders, tickets
});
export default rootReducer;
   