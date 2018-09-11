import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


function DateTime(props) {
  return (   
    <p className="small text-muted"><i className="fa fa-clock-o"></i> {props.date} </p>
  );
}


function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}
DateTime.propTypes = {
  messages: PropTypes.array.isRequired
}
const newMessagesContainer = connect(mapStateToProps)(DateTime)
export default newMessagesContainer





