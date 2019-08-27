import TopNav from "../components/TopNav";

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(TopNav);