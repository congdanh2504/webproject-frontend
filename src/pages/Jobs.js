import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard_Horizontal from "../components/JobCard_Horizontal";
import JobCard_Vertical from "../components/JobCard_Vertical";
import Loading from '../components/Loading';
import Pagination from 'react-js-pagination'

import { getUser } from '../api/Common';
import { getJobs } from '../api/jobAPI';
import { sortDescendingByRating,  sortLatest, sortBySalary } from '../models/Jobs'
function Jobs() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    getJobs(setJobs);
  }, [])

  const sortChange = (param) => {
    const option = param.target.value;
    switch (option) {
      case 'Rating':
        sortDescendingByRating(setJobs, jobs);
        break;
      case 'Popular':
        break;
      case 'Latest':
        sortLatest(setJobs, jobs);
        break;
      case 'Salary':
        sortBySalary(setJobs, jobs);
        break;
      default:
        getJobs(setJobs);
    }
  }

  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div class="breadcrumb-bar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-8 col-12">
              <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Search
                  </li>
                </ol>
              </nav>
              <h2 class="breadcrumb-title">
                2245 matches found for : VKU group
              </h2>
            </div>
            <div class="col-md-4 col-12 d-md-block d-none">
              <div class="sort-by">
                <span class="sort-title">Sort by</span>
                <span class="sortby-fliter">
                  <select class="select" onChange={sortChange}>
                    <option>Select</option>
                    <option class="sorting" value="Rating">Rating</option>
                    <option class="sorting" value="Popular">Popular</option>
                    <option class="sorting" value="Latest">Latest</option>
                    <option class="sorting" value="Free">Salary</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb --> */}

      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {(getUser() && getUser().type == "Employer") && <Link to='jobs/add-job' className="add-new-btn">Add job</Link>}
              {/* <!-- Search Filter --> */}
              <div class="card search-filter">
                <div class="card-header">
                  <h4 class="card-title mb-0">Search Filter</h4>
                </div>
                <div class="card-body">
                  <h5 className="text-center">Coming soon...</h5>
                  <div class="btn-search">
                    <button type="button" class="btn btn-block">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- /Search Filter --> */}
            </div>

            <div class="col-md-12 col-lg-8 col-xl-9">
    
              {jobs ? jobs.data.map((data, index) => {
                return <JobCard_Horizontal
                  key={data._id} user={data.user}
                  id={data._id} title={data.title}
                  imagesAddress={data.imagesAddress}
                  nameJob={data.nameJob}
                  duration={data.duration}
                  salary={data.salary}
                  category={data.category}
                  address={data.address}
                  rate={data.user.rate}
                  like={data.like}
                  comments={data.comments}
                />
              }) : <Loading />}
              {jobs && <div className="row mt-3 justify-content-center">
                <Pagination
                  activePage={jobs.current_page}
                  itemsCountPerPage={jobs.per_page}
                  totalItemsCount={jobs.total}
                  pageRangeDisplayed={5}
                  onChange={(num) => getJobs(setJobs, num)}
                  itemClass="page-item"
                  linkClass="page-link"
                  firstPageText="First"
                  lastPageText="Last"
                />
              </div>
              }
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
}

export default Jobs;
