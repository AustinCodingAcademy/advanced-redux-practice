import { connect } from "react-redux";
import Tickets from "../components/Tickets";

function mapStateToProps(state) {
  return {
    tickets: state.tickets
  };
}

export default connect(mapStateToProps)(Tickets);
