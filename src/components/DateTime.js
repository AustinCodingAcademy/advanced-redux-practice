import React from "react";
import { connect } from "react-redux";


function DateTime(props) {
  return (
    <p className="small text-muted"><i className="fa fa-clock-o"></i> {props.date}</p>
  );
}


function mapStateToProps(state) {
  return {
    date: state.tasks.date
  };
}

const DateTimeContainer = connect(mapStateToProps)(DateTime);
export default DateTimeContainer;
