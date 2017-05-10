import {combineReducers} from "redux";

function messasges(state = []) {
  return state;
}

function tasks(state = []) {
  return state;
}

const rootReducer = combineReducers({
  messages,
  tasks,
});

export default rootReducer;
