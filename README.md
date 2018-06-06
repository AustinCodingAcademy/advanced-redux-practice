A dashboard is a common type of user interface used to show a variety of information that is important in making decisions. It is usually read only which is perfect for practicing redux reducers. The data is currently being passed to components through props. Change the code to implement redux and remove any passing of props.


### Reducers
* X Create a new folder called reducers
* X Create a file in this folder called index.js
* X Import combineReducers from redux
* X Create a reducer function for each piece of data in state.js
  * X newComments
  * X newTasks
  * X newOrders
  * X tickets
  * X orders
  * X tasks
  * X messages
* X Remember 2 parameters state and action. Remember to return state
* X Combine the reducers and export
  


### Create the store
* X Create a store.js file
* X Import state from state.js
* X Import reducers from reducers/index
* X Create the store and export it

### Provide store to components
* X In index.js
* X Import Provider from react-redux
* X Import store from store.js
* X Use Provider component to wrap App
* X Give Provider a prop “store” and the value of the store

### Create Containers
* X In each Container:
* X Import connect from react-redux
* X Create a function called mapStateToProps that takes parameter state
* X Return an object. Decide what prop the component needs and this will be a key on the object
* X Decide what data from state the component needs and that will be the value on the object
* X Use the connect function and mapStateToProps to turn the component into a container
* X Export the container

### ONLY make these components into Containers
* X Tickets (use as example)
* X TransactionPanel 
* X TopNav
* X TasksPanel
* X Comments
* X Orders
* X Tasks

### Think - Why do the other components not care about the store such that we don't need to make them Containers??

### Fix
* X In App.js remove the props parameter and all instances of passing props 
* X In index.js remove all instances of state and passing props to App

