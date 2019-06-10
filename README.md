**DONE**

## Intro
When you run npm start the web page that comes up may appear familiar. A dashboard is a common type of user interface used to show a variety of information that is important in making decisions. It is usually read only which is perfect for practicing redux reducers. The data is currently being passed to components through props. Change the code to implement redux and remove any passing of props. What we are trying to accomplish with this project is only valuable to the programmer. The end user will see no change in the interface.
If done correctly, the web page should look the same, but no props are passed from any component to any other component.

### Setup
fork, clone, npm install, npm start

### Reducers
* Create a new folder called reducers
* Create a file in this folder called index.js
* Import combineReducers from redux
* Create a reducer function for each piece of data in state.js
  * newComments
  * newTasks
  * newOrders
  * tickets
  * orders
  * tasks
  * messages
* Remember 2 parameters state and action. Remember to return state
* Combine the reducers and export
  


### Create the store
* Create a store.js file
* Import createStore from redux
* Import state from state.js
* Import reducers from reducers/index
* Create the store and export it

### Provide store to components
* In index.js
* Import Provider from react-redux
* Import store from store.js
* Use Provider component to wrap App
* Give Provider a prop “store” and the value of the store

### Create Containers
* In each Container:
* Import connect from react-redux
* Create a function called mapStateToProps that takes parameter state
* Return an object. Decide what prop the component needs and this will be a key on the object
* Decide what data from state the component needs and that will be the value on the object
* Use the connect function and mapStateToProps to turn the component into a container
* Export the container

### ONLY make these components into Containers
* Tickets (use as example) **DONE**
* TransactionPanel 
* TopNav **DONE**
* TasksPanel **DONE**
* Comments **DONE**
* Orders **DONE**
* Tasks **DONE**

### Think - Why do the other components not care about the store such that we don't need to make them Containers??

### Fix
* In App.js remove the props parameter and all instances of passing props 
* In index.js remove all instances of state and passing props to App

