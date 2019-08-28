import {connect} from 'react-redux';
import Orders from '../components/Orders';

function mapStateToProps(state) {
    return {
        newOrders: state.newOrders
    }
}
export default connect(mapStateToProps)(Orders);