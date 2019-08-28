import { connect } from "react-redux";
import Comments from "../components/Comments";

function mapStateToProps(state) {
  return {
    newComments: state.newComments
  };
}
let connected = connect(mapStateToProps);
let container = connected(Comments);

export default container;
