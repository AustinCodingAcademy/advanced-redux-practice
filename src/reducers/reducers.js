import { combineReducers } from 'redux'

function tickets(state = "", action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
}

function newComments(state=0, action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
}  

function newTasks(state =[], action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
}


function newOrders(state = "", action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
}

function orders(state = "", action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
}

function tasks(state = "", action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
}

function messages(state = "", action){
  if (typeof state === 'undefined') {
    return []
  }
  return state
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