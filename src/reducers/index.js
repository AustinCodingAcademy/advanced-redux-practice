import {combineReducers} from 'redux';

function newComments(state = 0,action){
    return state;
}
function newTasks(state = 0,action){
    return state;
}

function newOrders(state = 0, action){
    return state;
}

function tickets(state = 0, action){
    return state;
}

function messages(state = [], action){
    return state;
}
const rootReducer = combineReducers({
 newComments, newTasks, newOrders, tickets
});
export default rootReducer;
