import Comments from "../components/Comments"
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        newComments: state.newComments
    }
}

export default connect(mapStateToProps)(Comments);