import {connect} from "react-redux";
import Tickets from "./Tickets";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const TicketsContainer = connect(
   mapStateToProps,
 )(Tickets);

export default TicketsContainer;
