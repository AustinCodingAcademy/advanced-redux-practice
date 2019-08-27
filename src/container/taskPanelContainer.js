import TaskPanel from "../components/TasksPanel";

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskPanel);