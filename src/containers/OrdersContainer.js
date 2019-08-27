import Orders from "../components/Orders"

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Orders);