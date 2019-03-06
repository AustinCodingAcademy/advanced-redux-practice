import { combineReducers } from 'redux'

function newComments(state, action) {
    if (typeof state === 'undefined') {
        return []
    }
    return state;
}

let reducers = Redux.combineReducers({
    newComments
})

export default reducers