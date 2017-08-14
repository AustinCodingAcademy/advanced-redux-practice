### Reducers
* xCreate a new folder called reducers
* xCreate a file in this folder called index.js
* xImport combineReducers from redux
* xCreate a reducer function for each piece of data in state.js
  * xnewComments
  * xnewTasks
  * xnewOrders
  * xtickets
  * xorders
  * xtasks
  * xmessages
* xRemember 2 parameters state and action. Remember to return state
* xCombine the reducers and export



### Create Database
* xCreate a store.js file
* xImport createStore from redux
* xImport state from state.js
* xImport reducers from reducers/index
* xCreate the store and export it

### Provide store to components
* xIn index.js
* xImport Provider from react-redux
* xImport store from store.js
* xUse Provider component to wrap App
* xGive Provider a prop “store” and the value of the store

### Create Containers
* xIn each Container:
* xImport connect from react-redux
* xCreate a function called mapStateToProps that takes parameter state
* xReturn an object. Decide what prop the component needs and this will be a key on the object
* xDecide what data from state the component needs and that will be the value on the object
* xUse the connect function and mapStateToProps to turn the component into a container
* xExport the container

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
* xIn App.js remove the props parameter and all instances of passing props
* xIn index.js remove all instances of state and passing props to App
