import React from "react";

function Orders(props) {
  return ( 
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-yellow">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-shopping-cart fa-5x" />
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
            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
            <div className="clearfix" />
          </div>
        </a>
      </div>
    </div>);
}

export default Orders;
