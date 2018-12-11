

import {combineReducers} from 'redux';

function Task(state = 0,action){
    return state;
   }

function newComments(state = 0,action){
 return state;
}
function newTasks(state = 0,action){
    return state;
   }

function newOrders(state = 0,action){
    return state;
   }

function newTickets(state = 0,action){
    return state;
   }
   
function messages(state = 0,action){
    return state;
   }

function orders(state = 0,action){
 return state;
}
const rootReducer = combineReducers({
    Task,
    orders,
    newComments,
    newTasks,
    newOrders,
    newTickets,
    messages,
});
export default rootReducer;
