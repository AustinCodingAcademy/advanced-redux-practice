import {connect} from "react-redux";
import Orders from "./Orders";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const OrdersContainer = connect(
   mapStateToProps,
 )(Orders);

export default OrdersContainer;
