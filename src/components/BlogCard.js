import React from "react";
import { Link, NavLink } from "react-router-dom";
import Moment from 'react-moment';
import image from '../assets/img/default_avatar.png'

function BlogCard(props) {
  return (
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card flex-fill blog-card">
        <i
          class="far fa-eye pt-2 pl-3 pb-2 pr-3 position-absolute text-white"
          style={{ right: "5%", backgroundColor: "rgba(0, 230, 91, 0.7)" }}
        >
          {" "}
          {props.views}
        </i>
        <img alt="Card Image" style={{ height : 250 }} src={props.imageAddress} class="card-img-top" />
        <div class="card-header">
          <div class="table-avatar pt-2 pb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <a href="#" class="avatar avatar-xs mr-2 float-left">
                  <img
                    class="avatar-img rounded-circle"
                    src={props.user.avatarAddress ? props.user.avatarAddress : image}
                    alt="User Image"
                  />
                </a>
                <a href="#" class="float-left">
                  <span> {props.user.name}</span>
                </a>
              </div>
              <i class="far fa-clock text-muted"><Moment format="YYYY/MM/DD">
                {props.time}
            </Moment></i>
            </div>
          </div>
          <Link to={`/blog/detail/${props.id}`} className="card-title h4 font-weight-bold">
            {props.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
