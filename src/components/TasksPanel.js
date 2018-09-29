import React from "react";
import TaskItem from "./TaskItem";
//import connect from react-redux//
import {connect} from 'react-redux';
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

export default TasksPanel;
//create a function called mapStateToProps that takes parameter state//
//Return an object, Decide what prop the component needs and this will be a key on the object//
//Use the connect function and mapStateToProps to turn the component into a container//
function taskPanel(props){
  let taskPanelDivs=props.taskPanels.map((taskPanels)=>{
    return <div>{taskPanels}</div>
  });
  return <div>{taskPanelDivs}</div>
}
function mapStateToProps(state){
  return{
    taskPanels:state.taskPanels
  }
}
const TaskPanelContainer = connect(mapStateToProps)(TaskPanels);
//export the container//
export default TaskPanelContainer;