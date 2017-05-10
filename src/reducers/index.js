import {combineReducers} from "redux";

function messages(state = []) {
  return state;
}

function tasks(state = []) {
  return state;
}

const rootReducer = combineReducers({
  messages,
  tasks
});

export default rootReducer;
