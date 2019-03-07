import { combineReducers } from 'redux'
import initialState from '../state'

function newComments(state = initialState.newComments, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

function newTasks(state = initialState.newTasks, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

function newOrders(state = initialState.newOrders, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

function tickets(state = initialState.tickets, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

function orders(state = initialState.orders, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

function tasks(state = initialState.tasks, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

function messages(state = initialState.messages, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

let reducers = combineReducers({
    newComments, newTasks, newOrders, tickets, orders, tasks, messages
})

export default reducers