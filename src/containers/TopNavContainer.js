import {connect} from "react-redux";
import TopNav from "../components/TopNav";

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps, null)(TopNav);
