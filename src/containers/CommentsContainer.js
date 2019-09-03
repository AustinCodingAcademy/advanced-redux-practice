import {connect} from 'react-redux';
import Comments from '../components/Comments';

function mapStateToProps(state){
return{
    newComments: state.newComments
    }
}
//first- the key: what prop the component needs
//second- the value: data from state the component needs

export default connect(mapStateToProps)(Comments)