import React from "react";
import { connect } from 'react-redux';

function Orders(props) {
  return ( 
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-yellow">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-shopping-cart fa-5x"></i>
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">{props.newOrders}</div>
              <div>New Orders!</div>
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

function mapStateToProps(state) {
  return {
    newOrders: state.newOrders,
  };
}

const OrdersContainer = connect(mapStateToProps)(Orders);
export default OrdersContainer;
