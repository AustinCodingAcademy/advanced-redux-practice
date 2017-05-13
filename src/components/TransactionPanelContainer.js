import {connect} from "react-redux";
import TransactionPanel from "./TransactionPanel";

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  };
};
const TransactionPanelContainer = connect(
  mapStateToProps
)(TransactionPanel);

export default TransactionPanelContainer;
