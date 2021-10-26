import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

function JobSeekers() {
  return (
    <>
      <Breadcrumb title="Users" type="admin" />
      <div class="container-fluid">
        <div class="row">
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <h2>Companies Management</h2>
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="datatable table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Specialities</th>
                            <th class="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#SP001</td>

                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="profile.html"
                                  class="avatar avatar-sm mr-2"
                                >
                                  <img
                                    class="avatar-img"
                                    src="assets/img/specialities/specialities-01.png"
                                    alt="Speciality"
                                  />
                                </a>
                                <a href="profile.html">Urology</a>
                              </h2>
                            </td>

                            <td class="text-right">
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#edit_specialities_details"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
                                <a
                                  data-toggle="modal"
                                  href="#delete_modal"
                                  class="btn btn-sm bg-danger-light"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP002</td>

                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="profile.html"
                                  class="avatar avatar-sm mr-2"
                                >
                                  <img
                                    class="avatar-img"
                                    src="assets/img/specialities/specialities-02.png"
                                    alt="Speciality"
                                  />
                                </a>
                                <a href="profile.html">Neurology</a>
                              </h2>
                            </td>

                            <td class="text-right">
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#edit_specialities_details"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
                                <a
                                  data-toggle="modal"
                                  href="#delete_modal"
                                  class="btn btn-sm bg-danger-light"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP003</td>

                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="profile.html"
                                  class="avatar avatar-sm mr-2"
                                >
                                  <img
                                    class="avatar-img"
                                    src="assets/img/specialities/specialities-03.png"
                                    alt="Speciality"
                                  />
                                </a>
                                <a href="profile.html">Orthopedic</a>
                              </h2>
                            </td>

                            <td class="text-right">
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#edit_specialities_details"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
                                <a
                                  data-toggle="modal"
                                  href="#delete_modal"
                                  class="btn btn-sm bg-danger-light"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP004</td>

                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="profile.html"
                                  class="avatar avatar-sm mr-2"
                                >
                                  <img
                                    class="avatar-img"
                                    src="assets/img/specialities/specialities-04.png"
                                    alt="Speciality"
                                  />
                                </a>
                                <a href="profile.html">Cardiologist</a>
                              </h2>
                            </td>

                            <td class="text-right">
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#edit_specialities_details"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
                                <a
                                  data-toggle="modal"
                                  href="#delete_modal"
                                  class="btn btn-sm bg-danger-light"
                                >
                                  <i class="fe fe-trash"></i> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#SP005</td>

                            <td>
                              <h2 class="table-avatar">
                                <a
                                  href="profile.html"
                                  class="avatar avatar-sm mr-2"
                                >
                                  <img
                                    class="avatar-img"
                                    src="assets/img/specialities/specialities-05.png"
                                    alt="Speciality"
                                  />
                                </a>
                                <a href="profile.html">Dentist</a>
                              </h2>
                            </td>

                            <td class="text-right">
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#edit_specialities_details"
                                >
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
                                <a
                                  class="btn btn-sm bg-danger-light"
                                  data-toggle="modal"
                                  href="#delete_modal"
                                >
                                  <i class="fe fe-trash"></i> Delete
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
          </main>
        </div>
      </div>
    </>
  );
}

export default JobSeekers;
