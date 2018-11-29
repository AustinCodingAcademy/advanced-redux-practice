import {combineReducers} from 'redux';

//state is a default property in this function
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


