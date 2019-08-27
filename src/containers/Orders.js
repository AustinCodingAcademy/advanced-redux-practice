import {connect} from 'react-redux';
import Orders from '../components/Orders'

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(Orders) 