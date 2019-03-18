import { combineReducers } from "redux"

function dateTime(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function newComments(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function newTasks(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function newOrders(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function tickets(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function orders(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function taskItem(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function tasks(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
}
function messages(state, action) {
    if (typeof state === 'undefined') {
      return []
    }
    return state
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
  })
