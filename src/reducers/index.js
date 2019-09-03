import {combineReducers} from 'redux';

function newComments(state = 0, action){
    return state;
}

function newTasks(state = 0, action){
    return state;
}

function newOrders(state = 0, action){
    return state;
}

function tickets(state = 0, action){
    return state;
  }

function orders(state =[], action){
    return state;
  }

function tasks(state =[], action){
    return state;
  }

function messages(state =[], action){
    return state;
  }


export default combineReducers({
    newComments,
    newTasks,
    newOrders,
    tickets,
    orders,
    tasks,
    messages
})