import {connect} from "react-redux";
import TasksPanel from "../components/TopNav";
import TopNav from "../components/TopNav";

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(TopNav);


