import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { getUser } from "../api/Common";
import { deleteJob } from "../api/jobAPI";

const categories = new Map();
categories.set("Programmer", "assets/img/categories/programmer.png");
categories.set("Editor", "assets/img/categories/editor.png");
categories.set("Receptionist", "assets/img/categories/receptionist.png");
categories.set("Designer", "assets/img/categories/designer.png");
categories.set("Web developer", "assets/img/categories/developer.png");

function JobCard_Horizontal(props) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="doctor-widget">
          <div class="doc-info-left">
            <div class="doctor-img">
              <Link to={`/profile/${props.user._id}`}>
                <img
                  src={props.imagesAddress}
                  class="img-fluid"
                  alt="Job Image"
                />
              </Link>
            </div>
            <div class="doc-info-cont">
              <h4 class="doc-name">
                <Link to={`/employerProfile/${props.user._id}`}>
                  {props.user.name}
                </Link>{" "}
                {/*name employer, company */}
              </h4>
              <p class="doc-speciality">
                {props.nameJob} - {props.title}
              </p>
              <h5 class="doc-department">
                <img
                  src={categories.get(props.category)}
                  class="img-fluid"
                  alt=""
                />
                {props.category}
              </h5>
              <div className="rating">
                <ReactStars
                  count={5}
                  size={24}
                  edit={false}
                  half={true}
                  value={props.user.rate.avg}
                  activeColor="#ffd700"
                />
                <span className="d-inline-block average-rating">
                  ({props.user.rate.count})
                </span>
              </div>
              <div class="clinic-details">
                <p class="doc-location">
                  <i class="fas fa-map-marker-alt"></i> {props.address.detail}
                </p>
              </div>
            </div>
          </div>
          <div class="doc-info-right">
            <div class="clini-infos">
              <ul>
                <li>
                  <i class="far fa-clock"></i> Deadline {props.duration}
                </li>
                <li>
                  <i class="far fa-money-bill-alt"></i> {props.salary} USD
                </li>
              </ul>
            </div>
            <div class="clinic-booking">
              <Link to={`/jobs/job-details/${props.id}`} class="view-pro-btn">
                See details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard_Horizontal;
