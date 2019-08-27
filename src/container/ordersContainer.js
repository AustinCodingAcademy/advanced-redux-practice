import Orders from "../components/Orders";

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        newOrders: state.newOrders
    }
}

export default connect(mapStateToProps)(Orders);