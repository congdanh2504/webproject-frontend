import React from "react";
import { Link } from "react-router-dom";

function JobDetails() {
  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <div class="breadcrumb-bar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-12 col-12">
              <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Job Details
                  </li>
                </ol>
              </nav>
              <h2 class="breadcrumb-title">Job Details</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb --> */}

      <div class="content">
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div class="doctor-widget">
                <div class="doc-info-left">
                  <div class="doctor-img">
                    <img
                      src="../assets/img/doctors/doctor-01.jpg"
                      class="img-fluid"
                      alt="User Image"
                    />
                  </div>
                  <div class="doc-info-cont">
                    <h4 class="doc-name">VKU group</h4>
                    <p class="doc-speciality">We have the right job for you</p>
                    <p class="doc-department">
                      <img
                        src="../assets/img/categories/categories-01.png"
                        class="img-fluid"
                        alt="Speciality"
                      />
                      Programmer
                    </p>
                    <div class="rating">
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star filled"></i>
                      <i class="fas fa-star"></i>
                      <span class="d-inline-block average-rating">(35)</span>
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
                  <div class="doctor-action">
                    <a href="javascript:void(0)" class="btn btn-white fav-btn">
                      <i class="far fa-bookmark"></i>
                    </a>
                    <a href="chat.html" class="btn btn-white msg-btn">
                      <i class="far fa-comment-alt"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="btn btn-white call-btn"
                      data-toggle="modal"
                      data-target="#voice_call"
                    >
                      <i class="fas fa-phone"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="btn btn-white call-btn"
                      data-toggle="modal"
                      data-target="#video_call"
                    >
                      <i class="fas fa-video"></i>
                    </a>
                  </div>
                  <div class="clinic-booking">
                    <a class="apt-btn" href="booking.html">
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body pt-0">
              <nav class="user-tabs mb-4">
                <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      href="#doc_overview"
                      data-toggle="tab"
                    >
                      Overview
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#doc_locations" data-toggle="tab">
                      Locations
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#doc_reviews" data-toggle="tab">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>

              <div class="tab-content pt-0">
                <div
                  role="tabpanel"
                  id="doc_overview"
                  class="tab-pane fade show active"
                >
                  <div class="row">
                    <div class="col-md-12 col-lg-9">
                      <div class="widget about-widget">
                        <h4 class="widget-title">About Us</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" id="doc_locations" class="tab-pane fade">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122708.985564692!2d108.11870716273522!3d16.031423630108062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142196670000001%3A0x592b1fdb40a1cb95!2zTmdoxKlhIHRyYW5nIEjDsmEgUGjDoXQ!5e0!3m2!1svi!2s!4v1633850474257!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{border: "none"}}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div role="tabpanel" id="doc_reviews" class="tab-pane fade">
                  <div class="widget review-listing">
                    <ul class="comments-list">
                      <li>
                        <div class="comment">
                          <img
                            class="avatar avatar-sm rounded-circle"
                            alt="User Image"
                            src="../assets/img/patients/patient.jpg"
                          />
                          <div class="comment-body">
                            <div class="meta-data">
                              <span class="comment-author">Richard Wilson</span>
                              <span class="comment-date">
                                Reviewed 2 Days ago
                              </span>
                              <div class="review-count rating">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                              </div>
                            </div>
                            <p class="recommended">
                              <i class="far fa-thumbs-up"></i> I recommend the
                              doctor
                            </p>
                            <p class="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation. Curabitur non
                              nulla sit amet nisl tempus
                            </p>
                            <div class="comment-reply">
                              <a class="comment-btn" href="#">
                                <i class="fas fa-reply"></i> Reply
                              </a>
                              <p class="recommend-btn">
                                <span>Recommend?</span>
                                <a href="#" class="like-btn">
                                  <i class="far fa-thumbs-up"></i> Yes
                                </a>
                                <a href="#" class="dislike-btn">
                                  <i class="far fa-thumbs-down"></i> No
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        <ul class="comments-reply">
                          <li>
                            <div class="comment">
                              <img
                                class="avatar avatar-sm rounded-circle"
                                alt="User Image"
                                src="../assets/img/patients/patient1.jpg"
                              />
                              <div class="comment-body">
                                <div class="meta-data">
                                  <span class="comment-author">
                                    Charlene Reed
                                  </span>
                                  <span class="comment-date">
                                    Reviewed 3 Days ago
                                  </span>
                                  <div class="review-count rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                  </div>
                                </div>
                                <p class="comment-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam. Curabitur non nulla
                                  sit amet nisl tempus
                                </p>
                                <div class="comment-reply">
                                  <a class="comment-btn" href="#">
                                    <i class="fas fa-reply"></i> Reply
                                  </a>
                                  <p class="recommend-btn">
                                    <span>Recommend?</span>
                                    <a href="#" class="like-btn">
                                      <i class="far fa-thumbs-up"></i> Yes
                                    </a>
                                    <a href="#" class="dislike-btn">
                                      <i class="far fa-thumbs-down"></i> No
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <div class="comment">
                          <img
                            class="avatar avatar-sm rounded-circle"
                            alt="User Image"
                            src="../assets/img/patients/patient2.jpg"
                          />
                          <div class="comment-body">
                            <div class="meta-data">
                              <span class="comment-author">Travis Trimble</span>
                              <span class="comment-date">
                                Reviewed 4 Days ago
                              </span>
                              <div class="review-count rating">
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star filled"></i>
                                <i class="fas fa-star"></i>
                              </div>
                            </div>
                            <p class="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation. Curabitur non
                              nulla sit amet nisl tempus
                            </p>
                            <div class="comment-reply">
                              <a class="comment-btn" href="#">
                                <i class="fas fa-reply"></i> Reply
                              </a>
                              <p class="recommend-btn">
                                <span>Recommend?</span>
                                <a href="#" class="like-btn">
                                  <i class="far fa-thumbs-up"></i> Yes
                                </a>
                                <a href="#" class="dislike-btn">
                                  <i class="far fa-thumbs-down"></i> No
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div class="all-feedback text-center">
                      <a href="#" class="btn btn-primary btn-sm">
                        Show all feedback <strong>(167)</strong>
                      </a>
                    </div>
                  </div>

                  <div class="write-review">
                    <h4>
                      Write a review for <strong>VKU group</strong>
                    </h4>

                    <form>
                      <div class="form-group">
                        <label>Review</label>
                        <div class="star-rating">
                          <input
                            id="star-5"
                            type="radio"
                            name="rating"
                            value="star-5"
                          />
                          <label for="star-5" title="5 stars">
                            <i class="active fa fa-star"></i>
                          </label>
                          <input
                            id="star-4"
                            type="radio"
                            name="rating"
                            value="star-4"
                          />
                          <label for="star-4" title="4 stars">
                            <i class="active fa fa-star"></i>
                          </label>
                          <input
                            id="star-3"
                            type="radio"
                            name="rating"
                            value="star-3"
                          />
                          <label for="star-3" title="3 stars">
                            <i class="active fa fa-star"></i>
                          </label>
                          <input
                            id="star-2"
                            type="radio"
                            name="rating"
                            value="star-2"
                          />
                          <label for="star-2" title="2 stars">
                            <i class="active fa fa-star"></i>
                          </label>
                          <input
                            id="star-1"
                            type="radio"
                            name="rating"
                            value="star-1"
                          />
                          <label for="star-1" title="1 star">
                            <i class="active fa fa-star"></i>
                          </label>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Title of your review</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="If you could say it in one sentence, what would you say?"
                        />
                      </div>
                      <div class="form-group">
                        <label>Your review</label>
                        <textarea
                          id="review_desc"
                          maxlength="100"
                          class="form-control"
                        ></textarea>

                        <div class="d-flex justify-content-between mt-3">
                          <small class="text-muted">
                            <span id="chars">100</span> characters remaining
                          </small>
                        </div>
                      </div>
                      <hr />
                      <div class="submit-section">
                        <button
                          type="submit"
                          class="btn btn-primary submit-btn"
                        >
                          Add Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
}

export default JobDetails;
