import React from "react";
import JobCard_Horizontal from "../components/JobCard_Horizontal";
import JobCard from "../components/JobCard_Vertical";

function Jobs() {
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
                    <a href="index-2.html">Home</a>
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
                  <select class="select">
                    <option>Select</option>
                    <option class="sorting">Rating</option>
                    <option class="sorting">Popular</option>
                    <option class="sorting">Latest</option>
                    <option class="sorting">Free</option>
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
              {/* <!-- Search Filter --> */}
              <div class="card search-filter">
                <div class="card-header">
                  <h4 class="card-title mb-0">Search Filter</h4>
                </div>
                <div class="card-body">
                  <div class="filter-widget">
                    <div class="cal-icon">
                      <input
                        type="text"
                        class="form-control datetimepicker"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Gender</h4>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="gender_type" checked />
                        <span class="checkmark"></span> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="gender_type" />
                        <span class="checkmark"></span> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div class="filter-widget">
                    <h4>Select Specialist</h4>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          checked
                        />
                        <span class="checkmark"></span> Urology
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="select_specialist"
                          checked
                        />
                        <span class="checkmark"></span> Neurology
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Dentist
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Orthopedic
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Cardiologist
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input type="checkbox" name="select_specialist" />
                        <span class="checkmark"></span> Cardiologist
                      </label>
                    </div>
                  </div>
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
              {/* <!-- Doctor Widget --> */}
              <JobCard_Horizontal />
              <JobCard_Horizontal />
              <JobCard_Horizontal />
              {/* <!-- /Doctor Widget --> */}
            </div>
            {/* <!-- /Doctor Widget --> */}
          </div>
        </div>

        {/* </div> */}
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
}

export default Jobs;
