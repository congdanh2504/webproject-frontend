import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function AdminDashboard() {
  return (
    <div>
      <Breadcrumb title="Dashboard" type="admin" />
      <h1>Dashboard</h1>
    </div>
  );
}

export default AdminDashboard;
