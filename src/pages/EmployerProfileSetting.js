import { CKEditor } from "ckeditor4-react";
import React, { useEffect, useState } from "react";
import { getUser } from "../api/Common";
import Breadcrumb from "../components/Breadcrumb";
import InputTag from "../components/InputTag";
import image from "../assets/img/default_avatar.png";
import { changePassword, employerUpdateProfile } from "../api/updateProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as FaIcons from "react-icons/fa";
import { getProvinces } from "../api/locationAPI";
import Select from "react-select";
import Modal from "react-modal";

function UserProfileSetting() {
  const [loading, setLoading] = useState(false);
  const [passwordChange, setPasswordChange] = useState({
    id: getUser()._id,
    email: getUser().email,
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [overviewAvatar, setOverviewAvatar] = useState(null);
  const [provinceOptions, changeProvinceOptions] = useState([]);
  const [employer, setEmployer] = useState({
    avatar: null,
    name: getUser().name,
    mobile: getUser().mobile,
    address: getUser().address?.detail,
    province: getUser().address?.province,
  });
  const [description, setDescription] = useState(getUser().description);
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      width: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const changePasswordChange = (e) => {
    setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
  };

  const changeInput = (e) => {
    setEmployer({ ...employer, [e.target.name]: e.target.value });
  };

  const changeProvince = (param) => {
    setEmployer({ ...employer, province: param.label });
  };

  const changeDescription = (param) => {
    setDescription(param.editor.getData());
  };

  const submit = async () => {
    setLoading(true);
    await employerUpdateProfile(employer, description, toast);
    setLoading(false);
  };

  const changeAvatar = (param) => {
    var file = param.target.files[0];
    setEmployer({ ...employer, avatar: file });
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setOverviewAvatar(reader.result);
    }.bind(this);
  };

  const changePass = async () => {
    if (passwordChange.newPassword != passwordChange.confirmNewPassword) {
      toast.info("New password and confirm not the same");
      return;
    }
    setLoading(true);
    await changePassword(passwordChange, toast);
    setLoading(false);
  };

  useEffect(() => {
    async function fetchProvinces() {
      let response = await getProvinces();
      changeProvinceOptions(response);
    }
    fetchProvinces();
  }, []);

  return (
    <>
      <Breadcrumb title="Update Profile" />
      <ToastContainer />
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <img
                        src={
                          getUser().avatarAddress
                            ? getUser().avatarAddress
                            : image
                        }
                        alt="User Image"
                      />
                    </a>
                    <div class="profile-det-info">
                      <h3>{getUser().name}</h3>
                      <div class="patient-details">
                        <h5>
                          <i class="fas fa-user-tie"></i> {getUser().type}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-7 col-lg-8 col-xl-9">
              <div class="card">
                <div class="card-body">
                  <div class="row form-row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <div class="change-avatar">
                          <div class="profile-img">
                            <img
                              src={
                                overviewAvatar
                                  ? overviewAvatar
                                  : getUser().avatarAddress
                                    ? getUser().avatarAddress
                                    : image
                              }
                              alt="User Image"
                            />
                          </div>
                          <div class="upload-img">
                            <div class="change-photo-btn">
                              <span>
                                <i class="fa fa-upload"></i> Upload Photo
                              </span>
                              <input
                                type="file"
                                class="upload"
                                onChange={changeAvatar}
                              />
                            </div>
                            <small class="form-text text-muted">
                              Allowed JPG, GIF or PNG. Max size of 2MB
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <InputTag
                      title="Company Name"
                      name="name"
                      defaultValue={employer.name}
                      type="text"
                      placeholder="Name of your company"
                      onChange={changeInput}
                    />
                    <InputTag
                      title="Mobile"
                      name="mobile"
                      defaultValue={employer.mobile}
                      type="text"
                      placeholder="Your phone number"
                      onChange={changeInput}
                    />
                    <InputTag
                      title="Address"
                      name="address"
                      defaultValue={employer.address}
                      type="text"
                      placeholder="806 Twin Willow Lane"
                      onChange={changeInput}
                    />
                    <div class="col-6">
                      <div class="form-group">
                        <label>Province</label>
                        <Select
                          placeholder="Province"
                          options={provinceOptions}
                          onChange={changeProvince}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-5 p-0">
                      <CKEditor
                        initData={description}
                        onChange={changeDescription}
                      />
                    </div>
                  </div>
                  <div class="submit-section">
                    <button
                      disabled={loading}
                      type="submit"
                      class="btn btn-primary submit-btn"
                      onClick={submit}
                    >
                      {loading && (
                        <span className="fa fa-refresh fa-spin">
                          <FaIcons.FaSpinner />
                        </span>
                      )}
                      {"  "}
                      Save Changes
                    </button>
                    <button
                      type="submit"
                      class="btn btn-info submit-btn"
                      onClick={() => setIsOpen(true)}
                    >
                      Change password
                    </button>
                  </div>
                  <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={() => setIsOpen(false)}
                  >
                    <h1>Change password</h1>
                    <div className="container row">
                      <InputTag
                        title="Old password"
                        name="oldPassword"
                        type="password"
                        placeholder="Old password"
                        onChange={changePasswordChange}
                      />
                      <InputTag
                        title="New password"
                        name="newPassword"
                        type="password"
                        placeholder="New password"
                        onChange={changePasswordChange}
                      />
                      <InputTag
                        title="Confirm"
                        name="confirmNewPassword"
                        type="password"
                        placeholder="Confirm"
                        onChange={changePasswordChange}
                      />
                    </div>
                    <button
                      style={{ marginLeft: "20px" }}
                      disabled={loading}
                      class="btn btn-primary submit-btn"
                      onClick={changePass}
                    >
                      {loading && (
                        <span className="fa fa-refresh fa-spin">
                          <FaIcons.FaSpinner />
                        </span>
                      )}
                      {"  "}
                      Save Change
                    </button>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileSetting;
