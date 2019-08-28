import { connect } from "react-redux";
import Orders from "../components/Orders";

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}
export default connect(mapStateToProps)(Orders);
