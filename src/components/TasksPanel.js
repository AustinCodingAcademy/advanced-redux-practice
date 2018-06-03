import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";


function TasksPanel(props) {
  return (  
    <div className="panel panel-default">
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

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

const TasksPanelContainer = connect(mapStateToProps)(TasksPanel);


export default TasksPanelContainer;
