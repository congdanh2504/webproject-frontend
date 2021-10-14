import React from "react";
import { Link, NavLink } from "react-router-dom";
import sampleImage from "../assets/img/img-01.jpg";

function BlogCard() {
  return (
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card flex-fill">
        <i
          class="far fa-eye pt-2 pl-3 pb-2 pr-3 position-absolute text-white"
          style={{ right: "5%", backgroundColor: "rgba(0, 230, 91, 0.7)" }}
        >
          {" "}
          6969
        </i>
        <img alt="Card Image" src={sampleImage} class="card-img-top" />
        <div class="card-header">
          <div class="table-avatar pt-2 pb-3">
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
          <Link to="/blog/detail" className="card-title h4 font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            ullam?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
