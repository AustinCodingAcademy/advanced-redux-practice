import {connect} from 'react-redux';
import Comments from '../components/Comments';

function mapStateToProps (state) {
    return {
        newComments: state.newComments
    }
}
export default connect(mapStateToProps)(Comments);