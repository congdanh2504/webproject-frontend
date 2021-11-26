import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard_Horizontal from "../components/JobCard_Horizontal";
import Loading from '../components/Loading';
import Pagination from 'react-js-pagination'
import { getUser } from '../api/Common';
import { getJobs, searchJob } from '../api/jobAPI';
import { sortDescendingByRating,  sortLatest, sortBySalary } from '../models/Jobs'
import { getProvinces } from "../api/locationAPI";
import Select from "react-select";

function Jobs() {
  const params = new URLSearchParams(window.location.search)
  const location = params.get("location")
  const keyword = params.get("keyword")
  const [jobs, setJobs] = useState(null);
  const categoryOptions = [{value: "Programmer", label: "Programmer"}, 
                            {value: "Editor", label: "Editor"},
                            {value: "Web developer", label: "Web developer"},
                            {value: "Designer", label: "Designer"},
                            {value: "Receptionist", label: "Receptionist"},]

  const [provinceOptions, changeProvinceOptions] = useState([]);
  const [province, changeProvince] = useState("");
  const [category, setCategory] = useState("");
  const style = {
    control: base => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none'
    })
  };

  const updateCategory = (param) => {
    setCategory(param.label);
  };

  const updateProvince = (param) => {
    changeProvince(param.label);
  };

  useEffect(() => {
    if (location || keyword) {
      searchJob(setJobs, location, keyword)
    } else {
      getJobs(setJobs);
    }
    async function fetchProvinces() {
      let response = await getProvinces();
      changeProvinceOptions(response);
    }
    fetchProvinces();
  }, [])

  const sortChange = (param) => {
    const option = param.target.value;
    switch (option) {
      case 'Rating':
        sortDescendingByRating(setJobs, jobs);
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
                Search
              </h2>
            </div>
            <div class="col-md-4 col-12 d-md-block d-none">
              <div class="sort-by">
                <span class="sort-title">Sort by</span>
                <span class="sortby-fliter">
                  <select class="select" onChange={sortChange}>
                    <option>Select</option>
                    <option class="sorting" value="Rating">Rating</option>
                    <option class="sorting" value="Latest">Latest</option>
                    <option class="sorting" value="Salary">Salary</option>
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
                  <Select
                    styles= {style}
                    className="form-control"
                    placeholder="Province"
                    options={provinceOptions}
                    onChange={updateProvince}
                  />
                  <Select
                    styles= {style}
                    className="form-control"
                    placeholder="Category"
                    options={categoryOptions}
                    onChange={updateCategory}
                  />
                  <div class="btn-search">
                    <button onClick={() => searchJob(setJobs, province, category)} type="button" class="btn btn-block">
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
