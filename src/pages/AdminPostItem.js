import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Moment from "react-moment";
import { getJobItem, getJobs } from "../api/jobAPI";
import Breadcrumb from "../components/Breadcrumb";
function AdminPostItem() {
  const [postItem, setPostItem] = useState(null)

  useEffect(() => {
    getJobs(setPostItem)
  }, [])

  return (
    <div>
      <Breadcrumb title="PostItem" type="admin" />
      <div class="container-fluid">
      <div class="row">
      <div class="col-sm-12">
          <div class="card">
          <div class="card-body">
              <div class="table-responsive">
              <table class="datatable table table-bordered table-hover table-center mb-0">
                  <thead class="thead-light">
                  <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>User name</th>
                      <th>Create at</th>
                      <th class="text-right">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {postItem ? postItem.data.map((job, index) => {
                      return (
                      <tr key={job._id}>
                          <td>{job._id}</td>

                          <td>
                          <h2 class="table-avatar">
                              {job.title}
                          </h2>
                          </td>
                          <td>
                          {job.user?.name ? job.user.name : null}
                          </td>
                          <td>
                          <Moment format="YYYY/MM/DD">{job.created_at}</Moment>
                          </td>
                          <td class="text-right">
                          <div class="actions">
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
                      )
                  }): null}
                  </tbody>
              </table>

              {postItem && <div className="row mt-3 justify-content-center">
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
              /></div>}
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
