import {connect} from "react-redux";
import Tasks from "../components/Tasks";

const mapStateToProps = (state) => {
  return {
    newTasks: state.newTasks
  };
};

export default connect(mapStateToProps, null)(Tasks);
