import {connect} from "react-redux";
import Orders from "./Orders";

const mapStateToProps = state => {
  return {
    newOrders: state.newOrders
  };
};

const OrdersContainer = connect(
  mapStateToProps
)(Orders);

export default OrdersContainer;
