import { connect } from "react-redux";
import TasksPanel from "../components/TasksPanel";

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(TasksPanel);
