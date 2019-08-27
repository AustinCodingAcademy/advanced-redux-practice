import TransactionsPanel from "../components/TransactionsPanel";

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(TransactionsPanel);