import {connect} from "react-redux";
import Tickets from "../components/Tickets"

const mapStateToProps = function (state) {
  return {
    tickets: state.tickets
  };
};
export default connect(mapStateToProps,null)(Tickets);
// export default connect(mapStateToProps,null)(Tickets);