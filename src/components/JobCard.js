import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { getUser } from "../api/Common";
import { deleteJob, getMyJobs, updateJob } from "../api/jobAPI";
import Modal from "react-modal";
import InputTag from "./InputTag";
import TextAreaTag from "./TextAreaTag";
import { getProvinces } from "../api/locationAPI";
import Select from "react-select";
import * as FaIcons from "react-icons/fa";

const categories = new Map();
categories.set("Programmer", "assets/img/categories/programmer.png");
categories.set("Editor", "assets/img/categories/editor.png");
categories.set("Receptionist", "assets/img/categories/receptionist.png");
categories.set("Designer", "assets/img/categories/designer.png");
categories.set("Web developer", "assets/img/categories/developer.png");

function JobCard(props) {
  const [loading, setLoading] = useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const customStylesEdit = {
    content: {
      height: "80%",
      width: "80%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflowY: "scroll",
    },
  };
  const [modalIsOpenDelete, setIsOpenDelete] = useState(false);
  const customStylesDelete = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [provinceOptions, changeProvinceOptions] = useState([]);
  const [job, setJob] = useState({
    id: props.id,
    title: "",
    nameJob: "",
    description: "",
    category: "",
    salary: "",
    duration: "",
    image: null,
    province: "",
    detail: "",
  });

  const changeInput = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const changeProvince = (e) => {
    setJob({ ...job, province: e.label });
  };

  const submit = async () => {
    setLoading(true);
    await updateJob(job, props.toast);
    setLoading(false);
    getMyJobs(props.setJobs, props.user._id);
    setIsOpenEdit(false);
  };

  useEffect(() => {
    async function fetchProvinces() {
      let response = await getProvinces();
      changeProvinceOptions(response);
    }
    fetchProvinces();
  }, []);

  return (
    <div class="card">
      <div class="card-body">
        <div class="doctor-widget">
          <div class="doc-info-left">
            <div class="doctor-img">
              <Link to={`/profile/${props.user._id}`}>
                <img src={props.imagesAddress} class="img-fluid" alt="Job " />
              </Link>
            </div>
            <div class="doc-info-cont">
              <h4 class="doc-name">
                <Link to={`/employerProfile/${props.user._id}`}>
                  {props.user.name}
                </Link>
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
              </div>
              <div class="clini-infos">
                <ul className="d-flex flex-column">
                  <li>
                    <i class="far fa-clock"></i> Deadline {props.duration}
                  </li>
                  <li>
                    <i class="far fa-money-bill-alt"></i> {props.salary} USD
                  </li>
                </ul>
              </div>
              <div class="clinic-details">
                <p class="doc-location">
                  <i class="fas fa-map-marker-alt"></i> {props.address.detail}
                </p>
              </div>
            </div>
          </div>
          <div class="doc-info-right">
            <div class="clinic-booking">
              <Link to={`/jobs/job-details/${props.id}`} class="view-pro-btn">
                See details
              </Link>
            </div>
            {getUser() && getUser()._id == props.user._id && (
              <div>
                <div class="clinic-booking-red">
                  <button
                    class="view-pro-btn-red"
                    onClick={() => setIsOpenDelete(true)}
                  >
                    Delete
                  </button>
                </div>
                <div class="clinic-booking-green">
                  <a
                    class="view-pro-btn-green"
                    onClick={() => {
                      setJob({
                        ...job,
                        ...props,
                        detail: props.address.detail,
                        province: props.address.province,
                      });
                      setIsOpenEdit(true);
                    }}
                  >
                    Edit
                  </a>
                </div>
              </div>
            )}
            <Modal
              isOpen={modalIsOpenDelete}
              style={customStylesDelete}
              onRequestClose={() => setIsOpenDelete(false)}
            >
              <h1>Are you sure ?</h1>
              <div class="clinic-booking-red">
                <button
                  disabled={loading}
                  class="view-pro-btn-red"
                  onClick={async () => {
                    setLoading(true);
                    await deleteJob(props.id, props.toast);
                    setLoading(false);
                    getMyJobs(props.setJobs, props.user._id);
                  }}
                >
                  {loading && (
                    <span className="fa fa-refresh fa-spin">
                      <FaIcons.FaSpinner />
                    </span>
                  )}
                  {"  "}Delete
                </button>
              </div>
              <div class="clinic-booking-green">
                <a
                  class="view-pro-btn-green"
                  onClick={() => setIsOpenDelete(false)}
                >
                  Cancel
                </a>
              </div>
            </Modal>
            <Modal
              isOpen={modalIsOpenEdit}
              style={customStylesEdit}
              onRequestClose={() => setIsOpenEdit(false)}
            >
              <div class="content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12 col-lg-10 col-xl-11 m-auto">
                      <div class="card">
                        <div class="card-body">
                          <div class="row form-row">
                            <InputTag
                              defaultValue={job.title}
                              type="text"
                              name="title"
                              title="Title"
                              placeholder="Title"
                              onChange={changeInput}
                              Image
                              required="true"
                            />
                            <div class="col-12 col-md-6">
                              <div class="form-group">
                                <label>
                                  Types of Career{" "}
                                  <span class="text-danger">*</span>
                                </label>
                                <select
                                  class="form-control select"
                                  name="category"
                                  onChange={changeInput}
                                >
                                  <option>Select</option>
                                  <option>Programmer</option>
                                  <option>Designer</option>
                                  <option>Editor</option>
                                  <option>Web developer</option>
                                  <option>Receptionist</option>
                                </select>
                              </div>
                            </div>
                            <InputTag
                              defaultValue={job.detail}
                              type="text"
                              title="Detail location"
                              name="detail"
                              placeholder="Detail location"
                              onChange={changeInput}
                              required="true"
                            />
                            <div class="form-group">
                              <label>
                                Province <span class="text-danger">*</span>
                              </label>
                              <Select
                                placeholder="Province"
                                onChange={changeProvince}
                                options={provinceOptions}
                              />
                            </div>
                            <InputTag
                              defaultValue={job.nameJob}
                              type="text"
                              title="Carrier"
                              name="nameJob"
                              placeholder="Input the name of career!"
                              onChange={changeInput}
                              required="true"
                            />
                            <InputTag
                              defaultValue={job.duration}
                              type="date"
                              title="Duration"
                              name="duration"
                              onChange={changeInput}
                              required="true"
                            />
                            <InputTag
                              defaultValue={job.salary}
                              type="number"
                              title="Salary (USD)"
                              name="salary"
                              onChange={changeInput}
                              required="true"
                            />
                          </div>
                          <div class="row form-row">
                            <TextAreaTag
                              defaultValue={job.description}
                              title="Short Description"
                              rows="5"
                              name="description"
                              placeholder="Write short description of the blog here!"
                              onChange={changeInput}
                              required="true"
                            />
                          </div>

                          <div class="submit-section">
                            <button
                              disabled={loading}
                              class="btn btn-primary submit-btn"
                              onClick={submit}
                            >
                              {loading && (
                                <span className="fa fa-refresh fa-spin">
                                  <FaIcons.FaSpinner />
                                </span>
                              )}
                              {"  "}
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
