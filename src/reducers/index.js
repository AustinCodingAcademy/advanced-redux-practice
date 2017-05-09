import {combineReducers} from "redux";

function messages(state = []) {
  return state;
}

function tasks(state = []) {
  return state;
}

export default combineReducers({
  messages,
  tasks
});
