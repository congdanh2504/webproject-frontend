import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { getUser, removeUserSession } from "../api/Common";
import image from "../assets/img/default_avatar.png";

const user = [
  { name: `Home`, path: `/` },
  { name: `Jobs`, path: `/jobs` },
  { name: `Top Companies`, path: `/topCompanies` },
  { name: `Blog`, path: `/blog` },
  { name: `About`, path: `/about` },
];
const admin = [
  { name: `Home`, path: `/` },
  { name: `Dashboard`, path: `/admin` },
  { name: `Users`, path: `/admin/job-seekers` },
  { name: `Companies`, path: `/admin/companies` },
  { name: `Blog`, path: `/admin/blog` },
  { name: `PostItem`, path: `/admin/postItem` },
];
function ShowNav(type) {
  let temp;
  if (type == "user") {
    temp = user;
  } else {
    temp = admin;
  }
  return (
    <>
      {temp.map((link) => (
        <li>
          <NavLink exact activeStyle={{ color: "#09dca4" }} to={link.path}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );
}

function Nav(props) {
  let temp;
  const type = props.type;
  temp = ShowNav(type);
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
                src="http://localhost:3000/assets/images/logo/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img
                  src={process.env.PUBLIC_URL + "assets/images/logo/logo.png"}
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
            <ul className="main-nav">{temp}</ul>
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
                    {/* {getUser().type == "Employee" ?
                      (<Link to={`/profile/${getUser()._id}`} className="dropdown-item"> Your Profile </Link> &&
                      <Link to="/userprofilesetting" className="dropdown-item"> Update s Profile </Link>):
                      <Link to={`/employerprofile/${getUser()._id}`} className="dropdown-item"> Your Profile </Link> &&
                      <Link to="/employerprofilesetting" className="dropdown-item"> Update sssd Profile </Link>
                    } */}
                    {getUser().type == "Employee" && (
                      <div>
                        <Link
                          to={`/profile/${getUser()._id}`}
                          className="dropdown-item"
                        >
                          {" "}
                          Your Profile{" "}
                        </Link>
                        <Link
                          to="/userprofilesetting"
                          className="dropdown-item"
                        >
                          {" "}
                          Update Profile{" "}
                        </Link>
                      </div>
                    )}
                    {getUser().type == "Employer" && (
                      <div>
                        <Link
                          to={`/employerprofile/${getUser()._id}`}
                          className="dropdown-item"
                        >
                          {" "}
                          Your Profile{" "}
                        </Link>
                        <Link
                          to="/employerprofilesetting"
                          className="dropdown-item"
                        >
                          {" "}
                          Update Profile{" "}
                        </Link>
                      </div>
                    )}
                    {getUser().type == "Admin" && (
                      <Link to="/admin" className="dropdown-item">
                        {" "}
                        Adminstration{" "}
                      </Link>
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
                  to="/login"
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

export default Nav;
