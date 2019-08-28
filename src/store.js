import { createStore } from 'redux';
import reducers from './reducers/index';
import state from './state';

let store = createStore(reducers, state)

export default store;