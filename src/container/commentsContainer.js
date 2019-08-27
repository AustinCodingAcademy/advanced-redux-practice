import Comments from "../components/Comments";

import {connect} from "react-redux";
function mapStateToProps(state){
    return {
        newComments: state.newComments
    }
}

export default connect(mapStateToProps)(Comments);
// the above is shorthand for the code below:
//let connected = connect(mapStateToProps);
//let container = connected(Comments);
// export default container;