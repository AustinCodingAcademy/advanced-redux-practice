import React from "react";
//import connect from react-redux//
import{connect} from 'react-redux';

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
                      <div className="huge">{props.newComments}</div>
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

export default Comments;
//Create a function called mapStateToProps that takes parameter state//
//Return an object, Decide what prop the component needs and this will be a key on the object//
//Dcide what date from the State the component needs and that will be the value on the object//
//Use the connect function and mapStateToProps to turn the component into a contianer//
//Export the container//
function Comments(props){
    let commentDivs = props.comments.map ((comments)=>{
        return <div>{comment}</div>
    });
    function mapStateToProps(state){
        return {
            comments:state.comments
        }
    }
    const CommentContainer = connect(
        mapStateToProps)(Comments);
        export default CommentsContainer
    )
}
