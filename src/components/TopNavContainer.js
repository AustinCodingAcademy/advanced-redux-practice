import {connect} from "react-redux";
import TopNav from "./TopNav";

const mapStateToProps = state => {
  return {
    topNav: state.topNav
  };
};

const TopNavContainer = connect(
  mapStateToProps
)(TopNav);

export default TopNavContainer;
