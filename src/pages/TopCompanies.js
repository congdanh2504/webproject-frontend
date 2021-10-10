import React from "react";
import CompanyCard from "../components/CompanyCard";

function TopCompanies() {
  return (
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
  );
}

export default TopCompanies;
