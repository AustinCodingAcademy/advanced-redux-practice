import {connect} from "react-redux";
import TopNav from "./TopNav";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const TopNavContainer = connect(
   mapStateToProps,
 )(TopNav);

export default TopNavContainer;
