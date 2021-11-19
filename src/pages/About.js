import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
function About() {
  return (
    <>
      <Breadcrumb title="About"></Breadcrumb>
      <div class="about-us-top-area section-top-gap-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="about-us-top-img">
                <img class="" src="assets/img/about-us-banner.jpg" alt="" />
              </div>
              <div class="about-us-top-content text-center">
                <h4>Welcome To JobHub!</h4>
                <p>
                  Jobhub was created to help employers, businesses, and employees connect. 
                  With Jobhub, finding jobs and hiring workers will be a lot easier. 
                  Furthermore, you can gain a lot of experience from other members' shared blogs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us-center-area section-top-gap-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="about-us-center-content text-center">
                <h4>Why Should You Choose Us?</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="about-promo-single-item">
                <img src="assets/img/locked.png" alt="" />
                <h6>Dependable and Secure</h6>
                <p> diverse and abundant job pool from a variety of reputable companies and employers will help you avoid taking unnecessary risks.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="about-promo-single-item">
                <img src="assets/img/clock.png" alt="" />
                <h6>Easy and Fast</h6>
                <p>You'll have no trouble finding the right job. If you are the employer, on the other hand, hire someone.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="about-promo-single-item">
                <img src="assets/img/24-hours-support.png" alt="" />
                <h6>Online Support 24/7</h6>
                <p>We are always available to help you if you have a problem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us-bottom-area section-top-gap-100">
        <div class="container">
        <div class="row">
            <div class="col-12">
              <div class="about-us-center-content text-center">
                <h4>Team Members</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="about-feature-single-item">
                <img class="img-fluid" src="assets/img/hacker.png" alt="" />
                <h6>Le Viet Thang</h6>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">

              <div class="about-feature-single-item">
              <img class="img-fluid" src="assets/img/hacker.png" alt="" />
                <h6>Truong Cong Danh</h6>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="about-feature-single-item">
              <img class="img-fluid" src="assets/img/hacker.png" alt="" />
                <h6>Pham Toan Phuc</h6>
                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
