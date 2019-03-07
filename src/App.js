import React from "react";
import TopNav from "./components/TopNav";
import AreaChart from "./components/AreaChart";
import Comments from "./components/Comments";
import DonutChart from "./components/DonutChart";
import Orders from "./components/Orders";
import SideNav from "./components/SideNav";
import Tasks from "./components/Tasks";
import TasksPanel from "./components/TasksPanel";
import Tickets from "./components/Tickets";
import TransactionsPanel from "./components/TransactionsPanel";
import { connect } from 'react-redux'


function App(props) {
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav/>
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
              <Comments/>
              <Tasks/>
              <Orders/>
              <Tickets/>
            </div>
            <AreaChart />
            <div className="row">
              <DonutChart />
              <div className="col-lg-4">
                <TasksPanel/>
              </div>
              <div className="col-lg-4">
                <TransactionsPanel/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state ) => {
   return {
     dateTime: state.dateTime,
     tickets: state.tickets,
     orders: state.orders,
     taskItem: state.taskItem,
     messages: state.messages,
   }
 }

export default connect(mapStateToProps)(App);
