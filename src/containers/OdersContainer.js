import {connect} from 'react-redux'
import Orders from '../components/Orders'

const mapStateToProps = state => {
    return {
        newOrders: state.newOrders
    }
  }
  //export default (Tickets);
  export default connect(mapStateToProps,null)(Orders);