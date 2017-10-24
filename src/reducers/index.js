import {combineReducers} from "redux";

function newComments(state=0, action) {
    return state;
}

function newTasks(state=0, action) {
    return state;
}

function newOrders(state=0, action) {
    return state;
}

function tickets(state=0, action) {
    return state;
}

function tasks(state=[], action) {
    return state;
}

function messages(state=[], action) {
    return state;
}

function orders(state=[], action) {
    return state;
}

function dateTime(state="", action) {
    return state;
}

function taskItem(state="", action) {
    return state;
}

const rootReducers = combineReducers({
    newComments,
    newTasks,
    newOrders,
    tickets,
    tasks,
    messages,
    orders,
    dateTime,
    taskItem
});

export default rootReducers;