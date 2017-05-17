import {connect} from "react-redux";
import Comments from "./Comments";

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const CommentsContainer = connect(
  mapStateToProps
)(Comments);

export default CommentsContainer;
