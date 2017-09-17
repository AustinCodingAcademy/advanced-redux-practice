### Reducers - Ericka Emery
DONE * Create a new folder called reducers
DONE * Create a file in this folder called index.js
DONE * Import combineReducers from redux
DONE * Create a reducer function for each piece of data in state.js
  * newComments
  * newTasks
  * newOrders
  * tickets
  * orders
  * tasks
  * messages
DONE * Remember 2 parameters state and action. Remember to return state
DONE * Combine the reducers and export
  


### Create Database
DONE * Create a store.js file
DONE * Import createStore from redux
DONE * Import state from state.js
DONE * Import reducers from reducers/index
DONE * Create the store and export it

### Provide store to components
DONE * In index.js
DONE * Import Provider from react-redux
DONE * Import store from store.js
DONE * Use Provider component to wrap App
DONE * Give Provider a prop “store” and the value of the store

DONE - ### Create Containers
* In each Container:
* Import connect from react-redux
* Create a function called mapStateToProps that takes parameter state
* Return an object. Decide what prop the component needs and this will be a key on the object
* Decide what data from state the component needs and that will be the value on the object
* Use the connect function and mapStateToProps to turn the component into a container
* Export the container

### ONLY make these components into Containers
* Tickets (use as example)
DONE * TransactionPanel 
DONE * TopNav
DONE * TasksPanel
DONE * Comments
DONE * Orders
DONE * Tasks

### Think - Why do the other components not care about the database such that we don't need to make them Containers??

### Fix
DONE * In App.js remove the props parameter and all instances of passing props 
DONE * In index.js remove all instances of state and passing props to App

