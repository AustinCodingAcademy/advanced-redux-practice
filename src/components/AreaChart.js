import React from "react";

function AreaChart() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              <i className="fa fa-bar-chart-o fa-fw"></i>
              Area Chart</h3>
          </div>
          <div className="panel-body">
            <div id="morris-area-chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaChart;
