import {connect} from 'react-redux';
import TransactionPanel from '../components/TransactionsPanel';

function mapStateToProps(state){
return{
    orders: state.orders
    }
}

export default connect(mapStateToProps)(TransactionPanel)