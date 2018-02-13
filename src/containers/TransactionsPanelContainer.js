import { connect } from 'react-redux';
import TransactionsPanel from "../components/TransactionsPanel";

function mapStateToProps(state) {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(TransactionsPanel);