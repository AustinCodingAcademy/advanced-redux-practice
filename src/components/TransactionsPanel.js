import React from "react";
import TransactionRow from "./TransactionRow";
//import connect from react-redux//
import {connect} from 'react-redux';

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
let transactionPanelDivs = props.TransactionPanel.map((transactionPanel)=>{
    return <div> {transactionPanelDivs} </div>
}
//create a function called mapStateTo Props that takes a parameter state//
//return an object decide what prop the component needs and this will be a key on the object//
//decide what data from state the component needs and that will be the VALUE on the object//
function mapStateToProps(state){
    return{
        transactionPanel:state.transactionPanel
    }
}
//use the connect function and mapStateProps to turn the component into a container//
//export the container//

const transactionPanelContainer = connect(mapStateToProps)(TransactionPanel);
export default TransactionPanelContainer;

