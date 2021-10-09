import React from "react";

function JobCard() {
  return (
    <div class="profile-widget">
      <div class="doc-img">
        <a href="">
          <img
            class="img-fluid"
            alt="User Image"
            src="assets/img/doctors/doctor-01.jpg"
          />
        </a>
        <a href="javascript:void(0)" class="fav-btn">
          <i class="far fa-bookmark"></i>
        </a>
      </div>
      <div class="pro-content">
        <h3 class="title">
          <a href="">VKU group</a>
          <i class="fas fa-check-circle verified"></i>
        </h3>
        <p class="speciality">We have the right job for you</p>
        <div class="rating">
          <i class="fas fa-star filled"></i>
          <i class="fas fa-star filled"></i>
          <i class="fas fa-star filled"></i>
          <i class="fas fa-star filled"></i>
          <i class="fas fa-star filled"></i>
          <span class="d-inline-block average-rating">(17)</span>
        </div>
        <ul class="available-info">
          <li>
            <i class="fas fa-map-marker-alt"></i> Danang, VN
          </li>
          <li>
            <i class="far fa-clock"></i> Deadline Otc, 10
          </li>
          <li>
            <i class="far fa-money-bill-alt"></i> $300 - $1000
            <i
              class="fas fa-info-circle"
              data-toggle="tooltip"
              title="Lorem Ipsum"
            ></i>
          </li>
        </ul>
        <div class="row row-sm">
          <div class="col-12">
            <a href="" class="btn view-btn">
              See details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;