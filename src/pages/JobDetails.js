import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { getJobItem } from '../api/jobAPI';
import Loading from '../components/Loading'
import { getUser } from "../api/Common";
import AddReview from "../components/AddReview";
import ReactStars from "react-rating-stars-component";

function JobDetails() {
  const id = useParams('id')
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobItem(setJob, id.id)
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
                        {job.category}
                      </p>
                      <div className="rating">
                          <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={job.user.rate.avg}
                            activeColor="#ffd700"
                          />
                        <span className="d-inline-block average-rating">({job.user.rate.count})</span>
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
                              __html: job.user?.description
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
                        {job.user.reviews ? job.user.reviews.map((review, index) => {
                          return  <li>
                          <div className="comment">
                            <Link to="/userprofilesetting">
                              <img
                                className="avatar avatar-sm rounded-circle"
                                alt="User Image"
                                src={review.user.avatarAddress}
                              />
                            </Link>
                            <div className="comment-body">
                              <div className="meta-data">
                                <Link to="/userprofilesetting">
                                  <span className="comment-author">
                                    {review.user.name}
                                  </span>
                                </Link>
                                <ReactStars
                                  count={5}
                                  size={24}
                                  edit={false}
                                  value={review.rate}
                                  activeColor="#ffd700"
                                />
                              </div>
                              <p className="recommended">
                                 {review.title}
                              </p>
                              <p className="comment-content">
                                {review.message}
                              </p>
                            
                            </div>
                          </div>
                        </li>
                        }): <h1>No reviews</h1>}
                      </ul>
                    </div>

                    {getUser() && <AddReview idJob={id.id} setJob={setJob} id={job.user._id}/>}
                    
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
