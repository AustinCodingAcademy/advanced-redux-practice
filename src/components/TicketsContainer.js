import {connect} from "react-redux";
import Tickets from "./Tickets";

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  };
};
const TicketsContainer = connect(
  mapStateToProps
)(Tickets);

export default TicketsContainer;
