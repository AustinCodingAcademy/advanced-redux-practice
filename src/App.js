import React from "react";
import TopNavContainer from "./components/TopNavContainer";
import PropTypes from "prop-types";
import AreaChart from "./components/AreaChart";
import CommentsContainer from "./components/CommentsContainer";
import DonutChart from "./components/DonutChart";
import OrdersContainer from "./components/OrdersContainer";
import SideNav from "./components/SideNav";
import TasksPanelContainer from "./components/TasksPanelContainer";
import TasksContainer from "./components/TasksContainer";
import TicketsContainer from "./components/TicketsContainer";
import TransactionsPanelContainer from "./components/TransactionsPanelContainer";

function App() {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNavContainer />
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
              <CommentsContainer />
              <TasksContainer />
              <OrdersContainer />
              <TicketsContainer />
            </div>
            <AreaChart />
            <div className="row">
              <DonutChart />
              <div className="col-lg-4">
                <TasksPanelContainer />
              </div>
              <div className="col-lg-4">
                <TransactionsPanelContainer />
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
