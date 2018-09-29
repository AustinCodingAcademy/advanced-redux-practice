import React from "react";
import MessagePreview from "./MessagePreview";
//import connect from react-redux//
import {connect} from 'react-redux';
function TopNav(props) {
  return (
    <ul className="nav navbar-right top-nav">
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></a>
        <ul className="dropdown-menu message-dropdown">
            {
                props.messages.map(function(m,i) {
                  return <MessagePreview key={i} message={m} />;
                })
            }
         
          <li className="message-footer">
            <a href="#">Read All New Messages</a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></a>
          <ul className="dropdown-menu alert-dropdown">
              <li>
                  <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
              </li>
              <li>
                  <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
              </li>
              <li>
                  <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
              </li>
              <li>
                  <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
              </li>
              <li>
                  <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
              </li>
              <li>
                  <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
              </li>
              <li className="divider"></li>
              <li>
                  <a href="#">View All</a>
              </li>
          </ul>
      </li>
      <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
          <ul className="dropdown-menu">
              <li>
                  <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
              </li>
              <li>
                  <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
              </li>
              <li>
                  <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
              </li>
              <li className="divider"></li>
              <li>
                  <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
              </li>
          </ul>
      </li>
    </ul>);
}

export default TopNav;
//create a function called mapStateToProps that takes parameter state//
//Return an object... Decide what prop the component needs and this will be a key on the object//
//Decide what date from State the component needs and that will be the value on the object//
let topNavDivs= props.topNavs.map((topNav)=>{
    return <div> {topNav} </div>
});
function mapStateToProps(state){
    return {
        topNav: state.topNav
    }
}
//use the connect function and mapStateToProps to turn the component into a container//
const TopNavContainer = connect(mapStateToProps)(topNav);
//Export the container//
export default TopNavContainer;
