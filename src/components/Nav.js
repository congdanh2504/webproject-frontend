import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { getUser, removeUserSession } from "../api/Common";
import image from "../assets/img/default_avatar.png";

function Nav_User() {
  const history = useHistory();

  const onLogout = () => {
    removeUserSession();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img
                src="assets/images/logo/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img
                  src="assets/images/logo/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <li className="">
                <NavLink exact activeStyle={{ color: "#09dca4" }} to="/user">
                  {" "}
                  <span className="active">Home</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "#09dca4" }} to="/user/jobs">
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ color: "#09dca4" }}
                  to="/user/topCompanies"
                >
                  Top Companies
                </NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "#09dca4" }} to="/user/blog">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "#09dca4" }} to="/user/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ color: "#09dca4" }}
                  to="/admin/companies"
                >
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="fas fa-building"></i>
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +1 123 456 7890</p>
              </div>
            </li>

            <li className="nav-item">
              {getUser() ? (
                <li class="nav-item dropdown has-arrow">
                  <a
                    href="#"
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                  >
                    <span class="user-img">
                      <img
                        class="rounded-circle"
                        src={
                          getUser().avatarAddress
                            ? getUser().avatarAddress
                            : image
                        }
                        width="31"
                        alt="Ryan Taylor"
                      />
                      {getUser().name}
                    </span>
                  </a>
                  <div class="dropdown-menu">
                    <div class="user-header">
                      <div class="avatar avatar-sm">
                        <img
                          src={
                            getUser().avatarAddress
                              ? getUser().avatarAddress
                              : image
                          }
                          alt="User Image"
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="user-text">
                        <h6>{getUser().name}</h6>
                        <p class="text-muted mb-0">{getUser().type}</p>
                      </div>
                    </div>

                    {getUser().type == "Employee" ? (
                      <div>
                        {" "}
                        <Link
                          class="dropdown-item"
                          to={`/user/profile/${getUser()._id}`}
                        >
                          My Profile
                        </Link>
                        <Link class="dropdown-item" to="/user/userprofilesetting">
                          Update Profile
                        </Link>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <Link class="dropdown-item" to={`/user/employerProfile/${getUser()._id}`}>
                          My Profile
                        </Link>
                        <Link class="dropdown-item" to="/user/employerprofilesetting">
                          Update Profile
                        </Link>
                      </div>
                    )}

                    <button class="dropdown-item" onClick={onLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              ) : (
                <NavLink
                  activeClassName="active"
                  className="nav-link header-login"
                  to="user/login"
                >
                  Login/Sign up
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function Nav_Admin() {
  const history = useHistory();

  const onLogout = () => {
    removeUserSession();
    history.push("/login");
    window.location.reload();
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img
                src="assets/images/logo/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img
                  src="assets/images/logo/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <a
                id="menu_close"
                className="menu-close"
                href="javascript:void(0);"
              >
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <li className="">
                <NavLink exact activeStyle={{ color: "#09dca4" }} to="/Dashboard">
                  {" "}
                  <span className="active">Dashboard</span>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "#09dca4" }} to="/admin/job-seekers">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ color: "#09dca4" }}
                  to="/admin/companies"
                >
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "#09dca4" }} to="/admin/blog">
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: "#09dca4" }} to="/admin/about">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ color: "#09dca4" }}
                  to="/admin/reviews"
                >
                  Review
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              {getUser() ? (
                <li class="nav-item dropdown has-arrow">
                  <a
                    href="#"
                    class="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                  >
                    <span class="user-img">
                      <img
                        class="rounded-circle"
                        src={
                          getUser().avatarAddress
                            ? getUser().avatarAddress
                            : image
                        }
                        width="31"
                        alt="Ryan Taylor"
                      />
                      {getUser().name}
                    </span>
                  </a>
                  <div class="dropdown-menu">
                    <div class="user-header">
                      <div class="avatar avatar-sm">
                        <img
                          src={
                            getUser().avatarAddress
                              ? getUser().avatarAddress
                              : image
                          }
                          alt="User Image"
                          class="avatar-img rounded-circle"
                        />
                      </div>
                      <div class="user-text">
                        <h6>{getUser().name}</h6>
                        <p class="text-muted mb-0">{getUser().type}</p>
                      </div>
                    </div>

                    <button class="dropdown-item" onClick={onLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              ) : (
                <NavLink
                  activeClassName="active"
                  className="nav-link header-login"
                  to="user/login"
                >
                  Login/Sign up
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function Nav(props) {
  let temp;
  const type = props.type;
  if (type === "user") {
    temp = Nav_User();
  } else {
    temp = Nav_Admin();
  }
  return <>{temp}</>;
}

export default Nav;
