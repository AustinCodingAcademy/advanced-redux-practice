import {combineReducers} from "redux";


function newComments(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    // case 'ADD_PRODUCT_TO_CART':
    //   return [...state, action.value];
    default:
      return state
  }
}
function newTasks(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
  // case 'ADD_PRODUCT_TO_CART':
  //   return [...state, action.value];
  default:
    return state
  }
}
function newOrders(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
  // case 'ADD_PRODUCT_TO_CART':
  //   return [...state, action.value];
  default:
    return state
  }
}
function tickets(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
  // case 'ADD_PRODUCT_TO_CART':
  //   return [...state, action.value];
  default:
    return state
  }
}
function orders(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
  // case 'ADD_PRODUCT_TO_CART':
  //   return [...state, action.value];
  default:
    return state
  }
}
function tasks(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
  // case 'ADD_PRODUCT_TO_CART':
  //   return [...state, action.value];
  default:
    return state
  }
}
function messages(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
  // case 'ADD_PRODUCT_TO_CART':
  //   return [...state, action.value];
  default:
    return state
  }
}
let reducers = combineReducers({
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  tasks,
  messages
});

export default reducers;