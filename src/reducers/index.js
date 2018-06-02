import {combineReducers} from 'redux';

//JS default parmaeter relates to the state = []
// this is an ES6 thing that sets state to an empty array when undefined
// the data type can be anything, it's just setting the default value when somehting is incorrectly passed
const tasks = (state = [], action)=>state

const newComments = (state = 0, action)=>state

const newTasks = (state = 0, action)=>state

const newOrders = (state = 0, action)=>state

const tickets = (state = 0, action)=>state

const orders = (state = [], action)=>state
//this one is on the transactionpanel

const messages = (state = [], action)=>state

const rootReducer = combineReducers({
 tasks, newComments, newTasks, newOrders, tickets, orders, messages
});
export default rootReducer;
