import {combineReducers} from 'redux';

const newComments = (state,action) => {
    if (typeof state === 'undefined') {
        return 0;
      }
    return state
}

const newTasks = (state,action) => {
    if (typeof state === 'undefined') {
        return [];
      }

    return state

}

const newOrders = (state,action) => {
    if (typeof state === 'undefined') {
        return 0;
      }

    return state

}

const tickets = (state,action) => {
    if (typeof state === 'undefined') {
        return 0;
      }

    return state

}

const orders = (state,action) => {
    if (typeof state === 'undefined') {
        return [];
      }

    return state

}

const tasks = (state,action) => {
    if (typeof state === 'undefined') {
        return [];
      }
    return state
}

const messages = (state,action) => {
    if (typeof state === 'undefined') {
        return [];
      }
    return state

}

const reducers = combineReducers({
    newComments, newOrders, newTasks, tickets, orders, tasks, messages
})

export default reducers;