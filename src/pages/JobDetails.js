import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { getJobItem } from '../api/jobAPI';
import Loading from '../components/Loading'
import { getUser } from "../api/Common";



function JobDetails() {
  const id = useParams('id')
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobItem(setJob, id.id);
  }, [])

  return (
    <>
      <Breadcrumb title="Job Details"></Breadcrumb>
      {job ?
        <div className="content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src={job.imagesAddress}
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">{job.user.name}</h4>
                      <p className="doc-speciality">{job.nameJob} - {job.title}</p>
                      <p className="doc-department">
                        <img
                          src={job.user.avatarAddress}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        {job.category}
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(35)</span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt"></i> {job.address.province}
                        </p>
                      </div>
                      <div className="clinic-services">
                        <span>Progamming</span>
                        <span>Java</span>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up"></i> 98%
                        </li>
                        <li>
                          <i className="far fa-comment"></i> 17 interested
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Deadline {job.duration}
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> ${job.salary}
                        </li>
                      </ul>
                    </div>
                    <div className="doctor-action">
                      <a href="javascript:void(0)" className="btn btn-white fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                      <a href="chat.html" className="btn btn-white msg-btn">
                        <i className="far fa-comment-alt"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white call-btn"
                        data-toggle="modal"
                        data-target="#voice_call"
                      >
                        <i className="fas fa-phone"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-white call-btn"
                        data-toggle="modal"
                        data-target="#video_call"
                      >
                        <i className="fas fa-video"></i>
                      </a>
                    </div>
                    <div className="clinic-booking">
                      <a className="apt-btn" href="booking.html">
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body pt-0">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#doc_overview"
                        data-toggle="tab"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#doc_locations" data-toggle="tab">
                        Locations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#doc_reviews" data-toggle="tab">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="tab-content pt-0">
                  <div
                    role="tabpanel"
                    id="doc_overview"
                    className="tab-pane fade show active"
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-9">
                        <div className="widget about-widget">
                          <h4 className="widget-title">About Us:</h4>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: getUser()?.description
                            }}>
                          </p>
                          <h4 className="widget-title">Job Description:</h4>
                          {job.description}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" id="doc_locations" className="tab-pane fade">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=${job.address.detail}`}
                      width="100%"
                      height="450"
                      style={{ border: "none" }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>

                  <div role="tabpanel" id="doc_reviews" className="tab-pane fade">
                    <div className="widget review-listing">
                      <ul className="comments-list">
                        <li>
                          <div className="comment">
                            <Link to="/userprofilesetting">
                              <img
                                className="avatar avatar-sm rounded-circle"
                                alt="User Image"
                                src="../assets/img/patients/patient.jpg"
                              />
                            </Link>
                            <div className="comment-body">
                              <div className="meta-data">
                                <Link to="/userprofilesetting">
                                  <span className="comment-author">
                                    Richard Wilson
                                  </span>
                                </Link>
                                <span className="comment-date">
                                  Reviewed 2 Days ago
                                </span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                              <p className="recommended">
                                <i className="far fa-thumbs-up"></i> I recommend the
                                doctor
                              </p>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation. Curabitur non
                                nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply"></i> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up"></i> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down"></i> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>

                          <ul className="comments-reply">
                            <li>
                              <div className="comment">
                                <img
                                  className="avatar avatar-sm rounded-circle"
                                  alt="User Image"
                                  src="../assets/img/patients/patient1.jpg"
                                />
                                <div className="comment-body">
                                  <div className="meta-data">
                                    <span className="comment-author">
                                      Charlene Reed
                                    </span>
                                    <span className="comment-date">
                                      Reviewed 3 Days ago
                                    </span>
                                    <div className="review-count rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                    </div>
                                  </div>
                                  <p className="comment-content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam. Curabitur non nulla
                                    sit amet nisl tempus
                                  </p>
                                  <div className="comment-reply">
                                    <a className="comment-btn" href="#">
                                      <i className="fas fa-reply"></i> Reply
                                    </a>
                                    <p className="recommend-btn">
                                      <span>Recommend?</span>
                                      <a href="#" className="like-btn">
                                        <i className="far fa-thumbs-up"></i> Yes
                                      </a>
                                      <a href="#" className="dislike-btn">
                                        <i className="far fa-thumbs-down"></i> No
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <div className="comment">
                            <img
                              className="avatar avatar-sm rounded-circle"
                              alt="User Image"
                              src="../assets/img/patients/patient2.jpg"
                            />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">Travis Trimble</span>
                                <span className="comment-date">
                                  Reviewed 4 Days ago
                                </span>
                                <div className="review-count rating">
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation. Curabitur non
                                nulla sit amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply"></i> Reply
                                </a>
                                <p className="recommend-btn">
                                  <span>Recommend?</span>
                                  <a href="#" className="like-btn">
                                    <i className="far fa-thumbs-up"></i> Yes
                                  </a>
                                  <a href="#" className="dislike-btn">
                                    <i className="far fa-thumbs-down"></i> No
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div className="all-feedback text-center">
                        <a href="#" className="btn btn-primary btn-sm">
                          Show all feedback <strong>(167)</strong>
                        </a>
                      </div>
                    </div>

                    <div className="write-review">
                      <h4>
                        Write a review for <strong>VKU group</strong>
                      </h4>

                      <form>
                        <div className="form-group">
                          <label>Review</label>
                          <div className="star-rating">
                            <input
                              id="star-5"
                              type="radio"
                              name="rating"
                              value="star-5"
                            />
                            <label for="star-5" title="5 stars">
                              <i className="active fa fa-star"></i>
                            </label>
                            <input
                              id="star-4"
                              type="radio"
                              name="rating"
                              value="star-4"
                            />
                            <label for="star-4" title="4 stars">
                              <i className="active fa fa-star"></i>
                            </label>
                            <input
                              id="star-3"
                              type="radio"
                              name="rating"
                              value="star-3"
                            />
                            <label for="star-3" title="3 stars">
                              <i className="active fa fa-star"></i>
                            </label>
                            <input
                              id="star-2"
                              type="radio"
                              name="rating"
                              value="star-2"
                            />
                            <label for="star-2" title="2 stars">
                              <i className="active fa fa-star"></i>
                            </label>
                            <input
                              id="star-1"
                              type="radio"
                              name="rating"
                              value="star-1"
                            />
                            <label for="star-1" title="1 star">
                              <i className="active fa fa-star"></i>
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Title of your review</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="If you could say it in one sentence, what would you say?"
                          />
                        </div>
                        <div className="form-group">
                          <label>Your review</label>
                          <textarea
                            id="review_desc"
                            maxlength="100"
                            className="form-control"
                          ></textarea>

                          <div className="d-flex justify-content-between mt-3">
                            <small className="text-muted">
                              <span id="chars">100</span> characters remaining
                            </small>
                          </div>
                        </div>
                        <hr />
                        <div className="submit-section">
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
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
        : <Loading />}
      {/* <!-- /Page Content --> */}
    </>
  );
}

export default JobDetails;
