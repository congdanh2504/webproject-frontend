import React from "react";
import { NavLink } from "react-router-dom";

function NavbarAdmin() {
  return (
    <>
      <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li>
                <NavLink to="/admin/companies">
                  <i class="fa fa-home"></i> <span>Companies</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/job-seekers">
                  <i class="fa fa-home"></i> <span>Job Seekers</span>
                </NavLink>
              </li>
              <li class="">
                <NavLink to="/admin/blog">
                  <i class="fa fa-home"></i> <span>Blog</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/reviews">
                  <i class="fa fa-home"></i> <span>Reviews</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarAdmin;
