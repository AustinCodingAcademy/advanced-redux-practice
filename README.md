
### Reducers
* x Create a new folder called reducers
* x Create a file in this folder called index.js
* x Import combineReducers from redux
* x Create a reducer function for each piece of data in state.js
  * newComments
  * newTasks
  * newOrders
  * tickets
  * orders
  * tasks
  * messages
* x  Remember 2 parameters state and action. Remember to return state
* x Combine the reducers and export
  


### Create Database
* x Create a store.js file
* x Import createStore from redux
* x Import state from state.js
* x Import reducers from reducers/index
* x Create the store and export it

### Provide store to components
* x In index.js
* Import Provider from react-redux
* Import store from store.js
* Use Provider component to wrap App
* x Give Provider a prop “store” and the value of the store

### Create Containers
* In each Container:
* Import connect from react-redux
* Create a function called mapStateToProps that takes parameter state
* Return an object. Decide what prop the component needs and this will be a key on the object
* Decide what data from state the component needs and that will be the value on the object
* Use the connect function and mapStateToProps to turn the component into a container
* Export the container

### ONLY make these components into Containers
* xTickets (use as example)
* xTransactionPanel 
* xTopNav
* xTasksPanel
* xComments
* xOrders
* xTasks 

### Think - Why do the other components not care about the database such that we don't need to make them Containers??

### Fix
* x In App.js remove the props parameter and all instances of passing props 
* x In index.js remove all instances of state and passing props to App

