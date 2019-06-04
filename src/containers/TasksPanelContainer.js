import {connect} from 'react-redux'
import TasksPanel from '../components/TasksPanel'

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
  }
  //export default (Tickets);
  export default connect(mapStateToProps,null)(TasksPanel);