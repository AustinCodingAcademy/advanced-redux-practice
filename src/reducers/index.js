import {combineReducers} from 'redux';

function newComments(state = 0,action){
    return state;
}
function newTasks(state = 0,action){
    return state;
}

const rootReducer = combineReducers({
 newComments, newTasks
});
export default rootReducer;
