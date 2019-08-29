import React from "react";
import TopNav from "./containers/TopNavContainer";
import PropTypes from "prop-types";
import AreaChart from "./components/AreaChart";
import Comments from "./containers/CommentsContainer";
import DonutChart from "./components/DonutChart";
import Orders from "./containers/OrdersContainer";
import SideNav from "./components/SideNav";
import Tasks from "./containers/TasksContainer";
import TasksPanel from "./containers/TasksPanelContainer";
import Tickets from "./containers/TicketsContainer";
import TransactionsPanel from "./containers/TransactionPanelContainer";


function App(props) {
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">
                    Dashboard <small>Statistics Overview</small>
                </h1>
                <ol className="breadcrumb">
                  <li className="active">
                    <i className="fa fa-dashboard" /> Dashboard
                  </li>
                </ol>
              </div>
            </div>
            <div className="row">
              <Comments />
              <Tasks />
              <Orders />
              <Tickets />
            </div>
            <AreaChart />
            <div className="row">
              <DonutChart />
              <div className="col-lg-4">
                <TasksPanel />
              </div>
              <div className="col-lg-4">
                <TransactionsPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

App.propTypes = {
  dateTime: PropTypes.string.isRequired,
  newComments: PropTypes.number.isRequired,
  newTasks: PropTypes.number.isRequired,
  newOrders: PropTypes.number.isRequired,
  tickets: PropTypes.number.isRequired,
  orders: PropTypes.array.isRequired,
  taskItem: PropTypes.string.isRequired,
  messages: PropTypes.array,
  tasks: PropTypes.array
};

export default App;