import { connect } from 'react-redux';
import Tasks from "../components/Tasks";

function mapStateToProps(state) {
    return {
        newTasks: state.newTasks
    }
}

export default connect(mapStateToProps)(Tasks);