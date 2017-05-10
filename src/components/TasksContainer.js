import {connect} from "react-redux";
import Tasks from "./Tasks";

const mapStateToProps = (state) => {
  return {
    newTasks: state.newTasks
  };
};

const TasksContainer = connect(
  mapStateToProps
)(Tasks);

export default TasksContainer;
