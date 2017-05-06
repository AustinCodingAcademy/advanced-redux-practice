import React from "react";
import { connect } from 'react-redux';

function TaskItem(props) {
  return (<a href="#" className="list-group-item">
              <span className="badge">{props.task.date}</span>
              <i className="fa fa-fw fa-calendar"></i> {props.task.task}
          </a> );
}

export default TaskItem;

