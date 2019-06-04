import { combineReducers } from 'redux'

function newComments(state=0, action){
  if(action.type === "INCREASE_COUNTER") return state + 1

  if(action.type === "DECREASE_COUNTER") return state - 1
  
  return state;
}   

function newTasks(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state, action.value]
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(0,1)
  }
  return state;
}


function newOrders(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function tickets(state = "", action){
  if(action.type === "SET_CITY"){
    return action.value;
  }
  return state;
}

function orders(state = "", action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}

function tasks(state = "", action){
    if(action.type === "SET_TEMP"){
      return action.value;
    }
    return state;
  }

function messages(state = "", action){
    if(action.type === "SET_TEMP"){
      return action.value;
    }
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