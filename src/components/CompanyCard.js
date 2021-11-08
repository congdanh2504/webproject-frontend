import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function CompanyCard(props) {
  return (
    <div className="col-lg-3 col-sm-12">
      <div class="profile-widget">
        <div class="doc-img">
          <a href="">
            <img
              class="img-fluid"
              alt="User Image"
              src={props.avatar}
            />
          </a>
          <a href="javascript:void(0)" class="fav-btn">
            <i class="far fa-bookmark"></i>
          </a>
        </div>
        <div class="pro-content">
          <h3 class="title">
            <a href="">{props.name}</a>
            <i class="fas fa-check-circle verified"></i>
          </h3>
          <p class="speciality">We have the right job for you</p>
          <div class="rating">
            <ReactStars
              count={5}
              size={24}
              edit={false}
              // half={true}
              value={props.rate.avg}
              activeColor="#ffd700"
            />
            <span class="d-inline-block average-rating">({props.rate.count})</span>
          </div>
          <ul class="available-info">
            <li>
              <i class="fas fa-map-marker-alt"></i> {props.address?.province}
            </li>
          </ul>
          <div class="row row-sm">
            <div class="col-12">
              <Link to={`/employerprofile/${props.id}`} className="btn view-btn">See details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
