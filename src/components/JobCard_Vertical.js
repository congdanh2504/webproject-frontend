import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function JobCard(props) {
  return (
    <div class="profile-widget">
      <div class="doc-img">
        <Link to={`/profile/${props.user._id}`}>
          <img
            class="img-fluid"
            alt="User Image"
            style={{ height: 150, objectFit: "cover" }}
            src={props.imagesAddress}
          />
        </Link>
        <a href="javascript:void(0)" class="fav-btn">
          <i class="far fa-bookmark"></i>
        </a>
      </div>
      <div class="pro-content">
        <h3 class="title">
          <Link to={`/employerProfile/${props.user._id}`}>{props.user.name}</Link>
          <i class="fas fa-check-circle verified"></i>
        </h3>
        <p class="speciality">{props.title}</p>
        <div className="rating">
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={props.user.rate.avg}
              activeColor="#ffd700"
            />
          <span className="d-inline-block average-rating">({props.user.rate.count})</span>
        </div>
        <ul class="available-info">
          <li>
            <i class="fas fa-map-marker-alt"></i> {props.address.province}
          </li>
          <li>
            <i class="far fa-clock"></i> Deadline {props.duration}
          </li>
          <li>
            <i class="far fa-money-bill-alt"></i> ${props.salary}
            <i
              class="fas fa-info-circle"
              data-toggle="tooltip"
              title="Lorem Ipsum"
            ></i>
          </li>
        </ul>
        <div class="row row-sm">
          <div class="col-12">
            <a href={`/jobs/job-details/${props.id}`} class="btn view-btn">
              See details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
