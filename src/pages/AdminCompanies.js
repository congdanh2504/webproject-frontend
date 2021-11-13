import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { getCompany } from "../api/Admin";
import image from "../assets/img/default_avatar.png";
import Moment from 'react-moment';

function Companies() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(setCompany);
  }, [])

  return (
    <>
      <Breadcrumb title="Companies" type="admin" />
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
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Registered at</th>
                        <th class="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {company ? company.data.map((user) => {
                        return (
                          <tr key={user.id}>
                            <td>{user._id}</td>

                            <td>
                              <h2 class="table-avatar">
                                <Link to={`/employerprofile/${user._id}`}
                                  className="avatar avatar-sm mr-2">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src={user?.avatarAddress ? user.avatarAddress : image}
                                    alt="avatar"
                                  />
                                </Link>
                                <Link to={`/employerprofile/${user._id}`} >{user.name}</Link>
                              </h2>
                            </td>
                            <td>
                              {user?.email ? user.email : null}
                            </td>
                            <td>
                              <Moment format="YYYY/MM/DD">{user.created_at}</Moment>
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
                      })
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Companies;
