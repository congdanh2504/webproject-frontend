import { CKEditor } from "ckeditor4-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api/Common";
import Breadcrumb from "../components/Breadcrumb";
import InputTag from "../components/InputTag";
import image from '../assets/img/default_avatar.png'
import { employerUpdateProfile } from "../api/updateProfile";
import { Employer } from "../models/Employer";

function UserProfileSetting() {
  const [overviewAvatar, setOverviewAvatar] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState("")
  const [dob, setDob] = useState("")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [province, setProvince] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const changeCompanyName = (param) => {
    setName(param.target.value)
  }

  const changeDob = (param) => {
    setDob(param.target.value)
  }

  const changeMobile = (param) => {
    setMobile(param.target.value)
  }

  const changeAddress = (param) => {
    setAddress(param.target.value)
  }

  const changeProvince = (param) => {
    setProvince(param.target.value)
  }

  const changeDescription = (param) => {
    setDescription(param.editor.getData())
  }

  const submit = () => {
    const employer = new Employer(avatar, name, address, province, mobile, description)
    employerUpdateProfile(employer, setError, setSuccess)

  }

  const changeAvatar = (param) => {
    var file = param.target.files[0];
    setAvatar(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setOverviewAvatar(reader.result)
    }.bind(this);
  }

  return (
    <>
      {/* <!-- Breadcrumb --> */}
      <Breadcrumb title="Update Profile" />
      {/* <!-- /Breadcrumb --> */}

      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <img
                        src={getUser().avatarAddress ? getUser().avatarAddress : image}
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
                              src={overviewAvatar ? overviewAvatar : getUser().avatarAddress ? getUser().avatarAddress : image}
                              alt="User Image"
                            />
                          </div>
                          <div class="upload-img">
                            <div class="change-photo-btn">
                              <span>
                                <i class="fa fa-upload"></i> Upload Photo
                              </span>
                              <input type="file" class="upload" onChange={changeAvatar} />
                            </div>
                            <small class="form-text text-muted">
                              Allowed JPG, GIF or PNG. Max size of 2MB
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <InputTag title="Company Name" type='text' placeholder="Name of your company" onChange={changeCompanyName}/>
                    <InputTag title="Moblie" type='text' placeholder="Your phone number" onChange={changeMobile}/>
                    <InputTag title="Address" type='text' placeholder="806 Twin Willow Lane" onChange={changeAddress}/>
                    <InputTag title="Province" type='text' placeholder="Old Forge" onChange={changeProvince}/>
                    <div className="col-12 mb-5 p-0">
                      <CKEditor initData="<h1>Write a description about your company</h1>" onChange={changeDescription}/>
                    </div>
                  </div>
                  {error && <div class="alert alert-danger">
                    {error}
                  </div>}
                  {success && <div class="alert alert-success">
                    {success}
                  </div>}
                  <div class="submit-section">
                    <button type="submit" class="btn btn-primary submit-btn" onClick={submit}>
                      Save Changes
                    </button>
                  </div>
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
