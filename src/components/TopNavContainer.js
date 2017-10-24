import {connect} from "react-redux";
import TopNav from "./TopNav";

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};
const TopNavContainer = connect(
  mapStateToProps
)(TopNav);


export default TopNavContainer;
