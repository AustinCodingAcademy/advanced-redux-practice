import {connect} from "react-redux";
import Comments from "../components/Comments";

const mapStateToProps = (state) => {
  return {
    newComments: state.newComments
  };
};

export default connect(mapStateToProps, null)(Comments);
