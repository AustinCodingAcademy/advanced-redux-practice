import {combineReducers} from 'redux';
import {Provider} from 'react-redux';
import store from "./store";

function newComments(state="",action){
  return state
}

function newTasks(state="",action){
  return state
}

function newOrders(state="",action){
  return state
}

function tickets(state="",action){
  return state
}

function tasks(state=[],action){
  return state
}

const rootReducer = combineReducers({
users,searchText,currentUser
});
export default rootReducer;

ReactDOM.render(
<Provider store={store}><App /></Provider>,
document.getElementById('root')
);
