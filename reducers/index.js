import {combineReducers} from 'redux';
import Provider from 'react-redux';
import Store from "./store.js";

// function newComments(state=[],action){
//   return state;
// }
//
// function newTasks(state=[],action){
//   return state;
// }
//
// function newOrders(state=[],action){
//   return state;
// }
//
// function tickets(state=[],action){
//   return state;
// }
//
// function tasks(state=[],action){
//   return state;
// }
//
// function messages(state=[],action){
//   return state;
// }
//
// function orders(state=[],action){
//   return state;
// }

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);



const rootReducer = combineReducers({
newComments,newTasks,newOrders,tickets,tasks,messages,orders
});
export default rootReducer;
