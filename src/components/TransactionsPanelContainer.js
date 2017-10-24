import {connect} from "react-redux";
import TransactionsPanel from "./TransactionsPanel";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const TransactionsPanelContainer = connect(
   mapStateToProps,
 )(TransactionsPanel);

export default TransactionsPanelContainer;
