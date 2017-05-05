import { createStore } from 'redux';
import reducers from './reducers';
import state from './state';

const store = createStore(reducers, state);

export default store;
