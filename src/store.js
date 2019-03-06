import { createStore } from 'redux'
import { state } from './state'
import { reducers } from './reducers/index'

let store = Redux.createStore(reducers, state)

export default store