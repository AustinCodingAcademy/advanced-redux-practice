import {connect} from "react-redux";
import Comments from "./Comments";
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const CommentsContainer = connect(
   mapStateToProps,
 )(Comments);

export default CommentsContainer;
