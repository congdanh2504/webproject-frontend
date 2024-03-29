import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { deleteJob, findPost } from "../api/Admin";
import { getJobItem, getJobs } from "../api/jobAPI";
import Breadcrumb from "../components/Breadcrumb";
function AdminPostItem() {
  const [postItem, setPostItem] = useState(null);

  useEffect(() => {
    getJobs(setPostItem);
  }, []);

  const UserKeyDown = (param) => {
    findPost(setPostItem, param.target.value);
  };

  return (
    <div>
      <Breadcrumb title="PostItem" type="admin" />
      <div class="container-fluid">
        <div className="row mt-3 mb-3">
          <div className="col-sm-6">
            <input
              className="form-control rounded-5"
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Find Post"
              onKeyDown={UserKeyDown}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="datatable table table-bordered table-hover table-center mb-0">
                    <thead class="thead-light">
                      <tr>
                        <th>ID</th>
                        <th>Job</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Link</th>
                        <th>Create at</th>
                        <th class="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {postItem
                        ? postItem.data.map((job, index) => {
                            return (
                              <tr key={job._id}>
                                <td>{job._id}</td>
                                <td>{job.nameJob}</td>
                                <td>
                                  <h2>{job.title}</h2>
                                </td>
                                <td>{job.user?.name ? job.user.name : null}</td>
                                <td>
                                  <Link to={`/jobs/job-details/${job._id}`}>
                                    Link
                                  </Link>
                                </td>
                                <td>
                                  <Moment format="YYYY/MM/DD">
                                    {job.created_at}
                                  </Moment>
                                </td>
                                <td class="text-right">
                                  <div
                                    class="actions"
                                    onClick={() =>
                                      deleteJob(setPostItem, job._id)
                                    }
                                  >
                                    <a
                                      data-toggle="modal"
                                      href="#delete_modal"
                                      class="btn btn-sm bg-danger-light"
                                    >
                                      <i class="fa fa-trash"></i> Delete
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        : null}
                    </tbody>
                  </table>

                  {postItem && (
                    <div className="row mt-3 justify-content-center">
                      <Pagination
                        activePage={postItem.current_page}
                        itemsCountPerPage={postItem.per_page}
                        totalItemsCount={postItem.total}
                        pageRangeDisplayed={5}
                        onChange={(num) => getJobs(setPostItem, num)}
                        itemClass="page-item"
                        linkClass="page-link"
                        firstPageText="First"
                        lastPageText="Last"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPostItem;
