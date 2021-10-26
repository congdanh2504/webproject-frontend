import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function JobCard_Horizontal(props) {
  const [rates, setRates] = useState([])
  useEffect(() => {
    getRates(setRates)
  }, [])
  function getRates(setRates) {
    var rates = [];
    for (var i = 0; i < props.rate; i++) {
      rates = [...rates, <i class="fas fa-star filled"></i>]
    }
    for (var i = props.rate; i <5; i++) {
      rates = [...rates, <i class="fas fa-star"></i>]
    }
    setRates(rates);
  }
  return (
    <div class="card">
      <div class="card-body">
        <div class="doctor-widget">
          <div class="doc-info-left">
            <div class="doctor-img">
              <a href="doctor-profile.html">
                <img
                  src={props.imagesAddress}
                  class="img-fluid"
                  alt="Job Image"
                />
              </a>
            </div>
            <div class="doc-info-cont">
              <h4 class="doc-name">
                <a href="doctor-profile.html">{props.user.name}</a> {/*name employer, company */}
              </h4>
              <p class="doc-speciality">{props.nameJob} - {props.title}</p>
              <h5 class="doc-department">
                <img
                  src="assets/img/categories/categories-01.png"
                  class="img-fluid"
                  alt=""
                />
                {props.category}
              </h5>
              <div class="rating">
                {rates ? rates.map((rate) => {
                  return rate;
                }) : null}
                <span class="d-inline-block average-rating"> ({props.rate})</span>
              </div>
              <div class="clinic-details">
                <p class="doc-location">
                  <i class="fas fa-map-marker-alt"></i> {props.address.detail}
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
                  <i class="far fa-clock"></i> Deadline {props.duration}
                </li>
                <li>
                  <i class="far fa-money-bill-alt"></i> {props.salary} USD
                </li>
              </ul>
            </div>
            <div class="clinic-booking">
              <Link to={`/jobs/job-details/${props.id}`} class="view-pro-btn">See details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard_Horizontal;
