import {connect} from "react-redux";
import Tasks from "./Tasks";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const TasksContainer = connect(
  mapStateToProps
)(Tasks);

export default TasksContainer;
