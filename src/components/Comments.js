import React from "react";
import { connect } from "react-redux";

function Comments(props) {
  return ( 
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-comments fa-5x" />
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">{props.newComments}</div>
              <div>New Comments!</div>
            </div>
          </div>
        </div>
        <a href="#">
          <div className="panel-footer">
            <span className="pull-left">View Details</span>
            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
            <div className="clearfix" />
          </div>
        </a>
      </div>
    </div>);
}

function mapStateToProps(state) {
  return {
    newComments: state.newComments
  };
}
   
const CommentsContainer = connect(mapStateToProps)(Comments);

export default CommentsContainer;
