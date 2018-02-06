import {connect} from "react-redux";
import TransactionsPanel from "../components/TransactionsPanel";

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  };
};

export default connect(mapStateToProps, null)(TransactionsPanel);
