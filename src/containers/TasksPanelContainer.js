import {connect} from 'react-redux';
import TaskPanel from '../components/TasksPanel';

function mapStateToProps(state){
return{
    tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskPanel)