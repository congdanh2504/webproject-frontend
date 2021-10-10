import React from "react";
import { Link } from "react-router-dom";

function JobCard_Horizontal() {
  return (
    <div class="card">
      <div class="card-body">
        <div class="doctor-widget">
          <div class="doc-info-left">
            <div class="doctor-img">
              <a href="doctor-profile.html">
                <img
                  src="./assets/img/doctors/doctor-01.jpg"
                  class="img-fluid"
                  alt="User Image"
                />
              </a>
            </div>
            <div class="doc-info-cont">
              <h4 class="doc-name">
                <a href="doctor-profile.html">VKU group</a>
              </h4>
              <p class="doc-speciality">We have the right job for you</p>
              <h5 class="doc-department">
                <img
                  src="assets/img/categories/categories-01.png"
                  class="img-fluid"
                  alt="Speciality"
                />
                Programmer
              </h5>
              <div class="rating">
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star"></i>
                <span class="d-inline-block average-rating">(17)</span>
              </div>
              <div class="clinic-details">
                <p class="doc-location">
                  <i class="fas fa-map-marker-alt"></i> Danang, VN
                </p>
              </div>
              <div class="clinic-services">
                <span>Progamming</span>
                <span>Java</span>
              </div>
            </div>
          </div>
          <div class="doc-info-right">
            <div class="clini-infos">
              <ul>
                <li>
                  <i class="far fa-thumbs-up"></i> 98%
                </li>
                <li>
                  <i class="far fa-comment"></i> 17 interested
                </li>
                <li>
                  <i class="far fa-clock"></i> Deadline Otc, 10
                </li>
                <li>
                  <i class="far fa-money-bill-alt"></i> $300 - $1000
                </li>
              </ul>
            </div>
            <div class="clinic-booking">
              <Link to="/jobs/job-details" class="view-pro-btn">See details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard_Horizontal;
