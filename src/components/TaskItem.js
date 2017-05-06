import React from "react";
import {connect} from "react-redux";

function TaskItems(props) {
  return (<a href="#" className="list-group-item">
              <span className="badge">{props.task.date}</span>
              <i className="fa fa-fw fa-calendar"></i> {props.task.task}
          </a> );
}
//component
function mapStateToProps(state) {
  return {
      task:state.tasks
  }
}
// the below key needs to be the same name as the props you require above, and the value needs to be the state.js files object/s being  called within the file to display the information.
const TaskItemContainer = connect(mapStateToProps)(TaskItems);
export default TaskItemContainer;
