import {combineReducers} from 'redux';

function tickets(state=0, action) {
    return state;
}

function newComments(state=0, action) {
    return state;
}

function newOrders(state=0, action) {
    return state;
}

function newTasks(state=0, action) {
    return state;
}

export default combineReducers({
    tickets,
    newComments,
    newOrders,
    newTasks
})
