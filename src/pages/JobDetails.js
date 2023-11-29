import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { addApply, getJobItem, response } from '../api/jobAPI';
import Loading from '../components/Loading';
import { getUser } from '../api/Common';
import AddReview from '../components/AddReview';
import ReactStars from 'react-rating-stars-component';
import avatar from '../assets/img/default_avatar.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as FaIcons from 'react-icons/fa';

function JobDetails() {
  const id = useParams('id');
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [applyStatus, setApplyStatus] = useState(false);

  useEffect(() => {
    getJobItem(setJob, id.id);
  }, []);

  const apply = () => {
    addApply(id.id, getUser()._id, toast);
  };

  useEffect(() => {
    setApplyStatus(job?.applies.find((item) => item._id === getUser()?._id));
    console.log(
      job?.applies.find((item) => item._id === getUser()?._id),
      'status'
    );
  }, [job]);

  return (
    <>
      <Breadcrumb title="Job Details"></Breadcrumb>
      <ToastContainer />
      {job ? (
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
                        alt="User"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">{job.user.name}</h4>
                      <p className="doc-speciality">
                        {job.nameJob} - {job.title}
                      </p>
                      <p className="doc-department">{job.category}</p>
                      <div className="rating">
                        <ReactStars
                          count={5}
                          size={24}
                          edit={false}
                          value={job.user.rate.avg}
                          activeColor="#ffd700"
                        />
                        <span className="d-inline-block average-rating">
                          ({job.user.rate.count})
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt"></i>{' '}
                          {job.address.province}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-clock"></i> Deadline{' '}
                          {job.duration}
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $
                          {job.salary}
                        </li>
                      </ul>
                    </div>
                    {getUser().type === 'Employee' && !applyStatus && (
                      <div class="clinic-booking">
                        <button class="btn btn-primary" onClick={apply}>
                          Apply CV
                        </button>
                      </div>
                    )}
                    {applyStatus && applyStatus.isApprove && (
                      <div class="btn btn-primary">
                        Applied <i class="fa fa-check" aria-hidden="true"></i>
                      </div>
                    )}
                    {applyStatus && applyStatus.isApprove == 'false' && (
                      <div class="btn btn-danger">
                        Is rejected{' '}
                        <i class="fa fa-time" aria-hidden="true"></i>
                      </div>
                    )}
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
                      <a
                        className="nav-link"
                        href="#doc_locations"
                        data-toggle="tab"
                      >
                        Locations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#doc_reviews"
                        data-toggle="tab"
                      >
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#doc_applies"
                        data-toggle="tab"
                      >
                        Applies
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
                              __html: job.user?.description,
                            }}
                          ></p>
                          <h4 className="widget-title">Job Description:</h4>
                          {job.description}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_locations"
                    className="tab-pane fade"
                  >
                    <iframe
                      title="location"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=${job.address.detail}`}
                      width="100%"
                      height="450"
                      style={{ border: 'none' }}
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_reviews"
                    className="tab-pane fade"
                  >
                    <div className="widget review-listing">
                      <ul className="comments-list">
                        {job.user.reviews ? (
                          job.user.reviews.map((review, index) => {
                            return (
                              <li>
                                <div className="comment">
                                  <img
                                    className="avatar avatar-sm rounded-circle"
                                    alt="User"
                                    src={
                                      review.user.avatarAddress
                                        ? review.user.avatarAddress
                                        : avatar
                                    }
                                  />
                                  <div className="comment-body">
                                    <div className="meta-data">
                                      <Link
                                        to={`/profile/${review.user.userID}`}
                                      >
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
                            );
                          })
                        ) : (
                          <h1>No reviews</h1>
                        )}
                      </ul>
                    </div>

                    {getUser() && getUser().type == 'Employee' && (
                      <AddReview
                        idJob={id.id}
                        setJob={setJob}
                        id={job.user._id}
                      />
                    )}
                  </div>
                  <div
                    role="tabpanel"
                    id="doc_applies"
                    className="tab-pane fade"
                  >
                    <div className="widget review-listing">
                      {loading && (
                        <span className="fa fa-refresh fa-spin">
                          <FaIcons.FaSpinner />
                        </span>
                      )}
                      <ul className="comments-list">
                        {job.applies.length > 0 ? (
                          job.applies.map((apply, index) => {
                            return (
                              <li>
                                <div className="comment">
                                  <img
                                    className="avatar avatar-sm rounded-circle"
                                    alt="User"
                                    src={
                                      apply.avatarAddress
                                        ? apply.avatarAddress
                                        : avatar
                                    }
                                  />
                                  <div className="comment-body">
                                    <div className="meta-data">
                                      <Link to={`/profile/${apply._id}`}>
                                        <span className="comment-author">
                                          {apply.name + ' '}
                                          {apply.isApprove == 'true' ? (
                                            <i
                                              class="fa fa-check"
                                              aria-hidden="true"
                                            ></i>
                                          ) : (
                                            <i
                                              class="fa fa-clock"
                                              aria-hidden="true"
                                            ></i>
                                          )}
                                        </span>
                                        {apply.isApprove == 'true' ? (
                                          <p>
                                            The application has been approved!
                                          </p>
                                        ) : (
                                          <p>The application is processing!</p>
                                        )}
                                      </Link>
                                    </div>
                                    <p>
                                      {getUser() &&
                                        getUser()._id == job.user._id &&
                                        apply.isApprove == 'null' && (
                                          <>
                                            <div class="clinic-booking">
                                              <a
                                                onClick={async () => {
                                                  setLoading(true);
                                                  await response(
                                                    index,
                                                    id.id,
                                                    'true',
                                                    toast
                                                  );
                                                  setLoading(false);
                                                  getJobItem(setJob, id.id);
                                                }}
                                                class="view-pro-btn"
                                              >
                                                <i
                                                  class="fa fa-check"
                                                  aria-hidden="true"
                                                ></i>
                                                Approve
                                              </a>
                                            </div>
                                            <div class="clinic-booking-red">
                                              <button
                                                onClick={async () => {
                                                  setLoading(true);
                                                  await response(
                                                    index,
                                                    id.id,
                                                    'false',
                                                    toast
                                                  );
                                                  setLoading(false);
                                                  getJobItem(setJob, id.id);
                                                }}
                                                class="view-pro-btn-red"
                                              >
                                                <i
                                                  class="fa fa-times"
                                                  aria-hidden="true"
                                                ></i>
                                                Disapprove
                                              </button>
                                            </div>
                                          </>
                                        )}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            );
                          })
                        ) : (
                          <h3>No application</h3>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {/* <!-- /Page Content --> */}
    </>
  );
}

export default JobDetails;
