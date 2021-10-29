import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CompanyCard from "../components/CompanyCard";
function Companies() {
  return (
    <>
      <Breadcrumb title="Companies" type="admin" />
      <div>
        <h1>Manage companies</h1>
      </div>
    </>
  );
}

export default Companies;
