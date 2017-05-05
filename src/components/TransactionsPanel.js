import React from "react";
import TransactionRow from "./TransactionRow";
import { connect } from "react-redux";

function TransactionsPanel(props) {
  return (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
        </div>
        <div className="panel-body">
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Order Date</th>
                            <th>Order Time</th>
                            <th>Amount (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        props.orders.map(function (order,i) {
                          return <TransactionRow key={i} order={order} />;
                        })
                      }

                    </tbody>
                </table>
            </div>
            <div className="text-right">
                <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div> );
}

function mapStateToProps(state){
  return{
    // the below key needs to be the same name as the props you require above,
    // and the value needs to be the state.js files object(s) being
    // called within the file
    orders:state.orders
  }
}
// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const TransactionsPanelContainer = connect(mapStateToProps)(TransactionsPanel);
export default TransactionsPanelContainer
