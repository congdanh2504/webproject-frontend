import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { getUsers, deleteUser } from "../api/Admin";
import image from "../assets/img/default_avatar.png";
import Moment from 'react-moment';
import Pagination from 'react-js-pagination';

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
                        <th>Registered at</th>
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
                            <td>
                              <Moment format="YYYY/MM/DD">{user.created_at}</Moment>
                            </td>
                            <td class="text-right">
                              <div class="actions">
                                <a
                                  data-toggle="modal"
                                  href="#delete_modal"
                                  class="btn btn-sm bg-danger-light"
                                  onClick={() => deleteUser(setUsers, user._id)}
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
                {users && <div className="row mt-3 justify-content-center">
                  <Pagination
                    activePage={users.current_page}
                    itemsCountPerPage={users.per_page}
                    totalItemsCount={users.total}
                    pageRangeDisplayed={5}
                    onChange={(num) => getUsers(setUsers, num)}
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
        </div>
      </div>
    </>
  );
}

export default JobSeekers;
