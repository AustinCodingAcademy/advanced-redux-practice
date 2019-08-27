import { combineReducers } from 'redux';

function newComments(state = 0, action){
    if(action.type === "SEE_COMMENTS"){
      return action.value;
    }
    return state;
  }

  function newTasks(state = 0, action){
    if(action.type === "SEE_TASKS"){
      return action.value;
    }
    return state;
  }

  function newOrders(state = 0, action){
    if(action.type === "SEE_ORDERS"){
      return action.value;
    }
    return state;
  }

  function tickets(state = 0, action){
    if(action.type === "SET_TICKETS"){
      return action.value;
    }
    return state;
  }

  function orders(state = 0, action){
    if(action.type === "SET_ORDERS"){
      return action.value;
    }
    return state;
  }

  function tasks(state = 0, action){
    if(action.type === "SET_TASKS"){
      return action.value;
    }
    return state;
  }

  function messages(state = 0, action){
    if(action.type === "SET_MESSAGES"){
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