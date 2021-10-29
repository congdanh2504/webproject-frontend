import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Bar from "../components/charts/ChartBar";
import Doughnut from "../components/charts/ChartDoughnut";
import Line from "../components/charts/ChartLine";
import Radar from "../components/charts/ChartRadar";
function AdminDashboard() {
  return (
    <div>
      <Breadcrumb title="Home" type="admin" />
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header ">
                    <span class="dash-widget-icon text-primary border-primary">
                      <i class="fa fa-users"></i>
                    </span>
                    <div class="dash-count">
                      <h3>168</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Users</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-primary w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header">
                    <span class="dash-widget-icon text-success">
                      <i class="fa fa-credit-card"></i>
                    </span>
                    <div class="dash-count">
                      <h3>487</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Companies</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-success w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header">
                    <span class="dash-widget-icon text-danger border-danger">
                      <i class="fa fa-money-bill"></i>
                    </span>
                    <div class="dash-count">
                      <h3>485</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Contract</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-danger w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-body">
                  <div class="dash-widget-header">
                    <span class="dash-widget-icon text-warning border-warning">
                      <i class="fa fa-folder"></i>
                    </span>
                    <div class="dash-count">
                      <h3>$62523</h3>
                    </div>
                  </div>
                  <div class="dash-widget-info">
                    <h6 class="text-muted">Revenue</h6>
                    <div class="progress progress-sm">
                      <div class="progress-bar bg-warning w-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="card card-chart">
                <div class="card-header">
                  <h4 class="card-title">Line Chart</h4>
                </div>
                <div class="card-body">
                  <Line />
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="card card-chart">
                <div class="card-header">
                  <h4 class="card-title">Bar Chart</h4>
                </div>
                <div class="card-body">
                  <Bar />
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="card card-chart">
                <div class="card-header">
                  <h4 class="card-title">Doughnut Chart</h4>
                </div>
                <div class="card-body">
                  <Doughnut />
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="card card-chart">
                <div class="card-header">
                  <h4 class="card-title">Radar Chart</h4>
                </div>
                <div class="card-body">
                  <Radar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
