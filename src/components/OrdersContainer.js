import {connect} from "react-redux";
import Orders from "./Orders";

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const OrdersContainer = connect(
  mapStateToProps
)(Orders);

export default OrdersContainer;
