import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CompanyCard from "../components/CompanyCard";

function TopCompanies() {
  return (
    <>
    <Breadcrumb title="Top Companies" />
      <div className="container mt-3">
        <div className="row">
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </>
  );
}

export default TopCompanies;
