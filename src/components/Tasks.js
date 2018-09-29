import React from "react";
//import ocnnect from react-redux//
import {connect} from 'react-redux';

function Tasks(props) {
  return ( <div className="col-lg-3 col-md-6">
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-tasks fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">{props.newTasks}</div>
                                        <div>New Tasks!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div className="panel-footer">
                                    <span className="pull-left">View Details</span>
                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                    <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>);
}

export default Tasks;
//Create a function called mapStateToProps that takes parameter state//
//Return an object, decide what prop the component needs and this will be a key on the object//
//Decide what data from state the component needs and that will be the value on the object//
//Use the Connect function and mapStateToProps//
function Tasks(props){
    lettaskDivs= props.tasks.map((tasks)=>{
        return <div>{tasks}</div>
    });
    function mapStateToProps(state){
        return{
            tasks:state.tasks
        }
    }
    const TasksContainer = connect(
        mapStateToProps)(Tasks);
//Export the container//
    export default TasksContainer;

