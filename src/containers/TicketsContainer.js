import Tickets from "../components/Tickets";
import {connect} from "react-redux";

const mapStateToProps = function (state) {
  return {
    tickets: state.tickets
  };
};
export default connect(mapStateToProps, null)(Tickets);
// export default connect(mapStateToProps,null)(Tickets);
