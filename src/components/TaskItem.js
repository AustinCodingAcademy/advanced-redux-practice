import React from "react";
import { connect } from "react-redux";

function TaskItem(props) {
  return (<a href="#" className="list-group-item">
              <span className="badge">{props.task.date}</span>
              <i className="fa fa-fw fa-calendar"></i> {props.task.task}
          </a> );
}

function mapStateToProps(state){
  return{
    // the below key needs to be the same name as the props you require above,
    // and the value needs to be the state.js files object(s) being
    // called within the file
    task:state.tasks
  }
}
// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const TaskItemContainer = connect(mapStateToProps)(TaskItem);
export default TaskItemContainer
