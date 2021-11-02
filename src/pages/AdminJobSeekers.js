import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { getUsers } from "../api/Admin";
import image from "../assets/img/default_avatar.png";

function JobSeekers() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers(setUsers);
  }, [])

  const getUserLink = (user) => {
    var userLink = `/profile/${user._id}`;
    return userLink;
  }
  return (
    <>
      <Breadcrumb title="Users" type="admin" />
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
                        <th>Name</th>
                        <th>Email</th>
                        <th class="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users ? users.data.map((user) => {
                        return (
                          <tr key={user.id}>
                            <td>{user._id}</td>

                            <td>
                              <h2 class="table-avatar">
                                <Link to={getUserLink(user)}
                                  className="avatar avatar-sm mr-2">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src={user?.avatarAddress ? user.avatarAddress : image}
                                    alt="avatar"
                                  />
                                </Link>
                                <Link to={getUserLink(user)}>{user.name}</Link>
                              </h2>
                            </td>
                            <td>
                              {user?.email ? user.email : null}
                            </td>
                            <td class="text-right">
                              <div class="actions">
                                <a
                                  class="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#edit_specialities_details"
                                >
                                  <i class="fe fe-pencil"></i> View
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

export default JobSeekers;
