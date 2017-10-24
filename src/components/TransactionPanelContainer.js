import {connect} from "react-redux";
import TransactionPanel from "./TransactionPanel";

const mapStateToProps = state => {
  return {
    transactionPanel: state.transactionPanel
  };
};

const TransactionPanelContainer = connect(
  mapStateToProps
)(TransactionPanel);

export default TransactionPanelContainer;
