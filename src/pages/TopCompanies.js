import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CompanyCard from "../components/CompanyCard";
import Loading from "../components/Loading";
import { getCompany } from "../api/System";
import Pagination from "react-js-pagination";

function TopCompanies() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(setCompany);
  }, []);

  return (
    <>
      <Breadcrumb title="Top Companies" />
      <div className="container-fluid mt-5">
        <div class="col-md-12">
          <div class="row">
            {company ? (
              company.data.map((data) => {
                return (
                  <CompanyCard
                    key={data._id}
                    id={data._id}
                    name={data.name}
                    rate={data.rate}
                    address={data.address}
                    avatar={data.avatarAddress}
                  />
                );
              })
            ) : (
              <Loading />
            )}
          </div>
          {company && (
            <div className="row mt-3 justify-content-center">
              <Pagination
                activePage={company.current_page}
                itemsCountPerPage={company.per_page}
                totalItemsCount={company.total}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                firstPageText="First"
                lastPageText="Last"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TopCompanies;
