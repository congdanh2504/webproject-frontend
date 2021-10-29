import React from "react";
import Breadcrumb from "../components/Breadcrumb";
function AdminReviews() {
  return (
    <div>
      <Breadcrumb title="Reviews" type="admin" />
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="datatable table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Company Name</th>
                      <th>Ratings</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <a href="profile.html" class="avatar avatar-sm mr-2">
                            <img
                              class="avatar-img rounded-circle"
                              src="assets/img/patients/patient1.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <a href="profile.html" class="avatar avatar-sm mr-2">
                            <img
                              class="avatar-img rounded-circle"
                              src="assets/img/doctors/doctor-thumb-01.jpg"
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>

                      <td>
                        <i class="fa fa-star text-warning"></i>
                        <i class="fa fa-star text-warning"></i>
                        <i class="fa fa-star text-warning"></i>
                        <i class="fa fa-star text-warning"></i>
                        <i class="fa fa-star-o text-secondary"></i>
                      </td>

                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </td>
                      <td>
                        3 Nov 2019 <br />
                        <small>09.59 AM</small>
                      </td>
                      <td class="text-right">
                        <div class="actions">
                          <a
                            class="btn btn-sm bg-danger-light"
                            data-toggle="modal"
                            href="#delete_modal"
                          >
                            <i class="fa fa-trash"></i> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReviews;
