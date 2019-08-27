import Tickets from "../components/Tickets"

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps)(Tickets);