import {connect} from "react-redux";
import TasksPanel from "../components/TasksPanel"


const mapStateToProps = function (state) {
    return {
      tasks: state.tasks
    };
  };
  export default connect(mapStateToProps)(TasksPanel);