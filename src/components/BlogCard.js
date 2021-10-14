import React from "react";
import { Link, NavLink } from "react-router-dom";
import sampleImage from "../assets/img/img-01.jpg";

function BlogCard() {
  return (
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card flex-fill">
        <img alt="Card Image" src={sampleImage} class="card-img-top" />
        <div class="card-header d-flex justify-content-between align-items-center">
          <Link to="/blog/detail" className="card-title h4 font-weight-bold">
            Blog title
          </Link>
          <i class="far fa-eye float-right text-muted"> 6969</i>
        </div>
        <div class="card-body">
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            ex?
          </p>
          <div class="table-avatar">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a href="#" class="avatar avatar-xs mr-2 float-left">
                  <img
                    class="avatar-img rounded-circle"
                    src="assets/img/img-01.jpg"
                    alt="User Image"
                  />
                </a>
                <a href="#" class="float-left">
                  <span> Mr. Ruby Perrin </span>
                </a>
              </div>
              <i class="far fa-clock text-muted"> 1 minute ago</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
