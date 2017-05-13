import {connect} from "react-redux";
import Comments from "./Comments";

const mapStateToProps = (state) => {
  return {
    newComments: state.newComments
  };
};
const CommentsContainer = connect(
  mapStateToProps
)(Comments);

export default CommentsContainer;
