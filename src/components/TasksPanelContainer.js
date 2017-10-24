import {connect} from "react-redux";
import TasksPanel from "./TasksPanel";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
const TasksPanelContainer = connect(
  mapStateToProps
)(TasksPanel);


export default TasksPanelContainer;
