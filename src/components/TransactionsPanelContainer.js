import {connect} from "react-redux";
import TransactionsPanel from "./TransactionsPanel";

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};
const TransactionsPanelContainer = connect(
  mapStateToProps
)(TransactionsPanel);


export default TransactionsPanelContainer;
