import React from "react";
import { connect } from 'react-redux';

function Comments(props) {
  return ( 
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-primary">
          <div className="panel-heading">
              <div className="row">
                  <div className="col-xs-3">
                      <i className="fa fa-comments fa-5x"></i>
                  </div>
                  <div className="col-xs-9 text-right">
                      <div className="huge">{props.comments}</div>
                      <div>New Comments!</div>
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

//the left hand side, the key of the object is the name of the prop
//the right hand side, represents the comment component reducer
function mapStateToProps(state){
    return{
      comments:state.newComments
    }
   }
   
//    let connector=connect(mapStateToProps); you could do this, then have const CommentsContainer=(Comments)
//    below is the same thing
   const CommentsContainer= connect(mapStateToProps)(Comments);
   export default CommentsContainer
// a component connected to redux is named container

//export default Comments;
