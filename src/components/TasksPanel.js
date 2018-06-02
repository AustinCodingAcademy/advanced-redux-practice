import React from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


function TasksPanel(props) {
  return (  <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                </div>
                <div className="panel-body">
                    <div className="list-group">
                      {
                        props.tasks.map(function (t,i) {
                          return <TaskItem key={i} task={t} />;
                        })
                      }
                        
                    </div>
                    <div className="text-right">
                        <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
          </div>
        );
}


//all componentes will require this syntax to connect to redux
const mapStateToProps=(state)=>{return{tasks:state.tasks}}
//this function can be called something else if desired
//the left key is the prop in the current file
//the right value (state.tasks) is the value in state (from the reducer file) -> this is connected through the connect

const TaskPanelContainer = connect(mapStateToProps)(TasksPanel);
//the first argument is the function to connect state and props
//the second argument is the component that we are connecting to redux

// the variable should be the component name concat with Container
export default TaskPanelContainer
//this replaces the original export TaskPanel.  It exports the entire component

TaskPanelContainer.PropTypes = {
  tasks: PropTypes.string.isRequired
}