import Tasks from "../components/Tasks";

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        newTasks: state.newTasks
    }
}

export default connect(mapStateToProps)(Tasks);