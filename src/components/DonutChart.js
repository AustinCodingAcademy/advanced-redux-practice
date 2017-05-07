import React from "react";

function DonutChart() {
  return (
    <div className="col-lg-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><i className="fa fa-long-arrow-right fa-fw" /> Donut Chart</h3>
        </div>
        <div className="panel-body">
          <div id="morris-donut-chart" />
          <div className="text-right">
            <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonutChart;
