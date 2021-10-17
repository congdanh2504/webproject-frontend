import { CKEditor } from "ckeditor4-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api/Common";
import InputTag from "../components/InputTag";
import image from '../assets/img/default_avatar.png'
import { employeeUpdateProfile } from "../api/updateProfile";
import { Employee } from "../models/Employee";

function UserProfileSetting() {
  const [overviewAvatar, setOverviewAvatar] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [province, setProvince] = useState("")
  const [cv, setCV] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const changeFirstName = (param) => {
    setFirstName(param.target.value)
  }

  const changeLastName = (param) => {
    setLastName(param.target.value)
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

  const changeCV = (param) => {
    setCV(param.editor.getData())
  }

  const submit = () => {
    const employee = new Employee(avatar, firstName, lastName, dob, address, province, mobile, cv)
    employeeUpdateProfile(employee, setError, setSuccess)
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
                    Profile
                  </li>
                </ol>
              </nav>
              <h2 class="breadcrumb-title">Profile</h2>
            </div>
          </div>
        </div>
      </div>
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
                      <h3>Richard Wilson</h3>
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
                    <InputTag title="First Name" type='text' placeholder="First Name" onChange={changeFirstName}/>
                    <InputTag title="Last Name" type='text' placeholder="Last Name" onChange={changeLastName}/>
                    <InputTag title="Date of Birth" type='date' onChange={changeDob}/>  
                    <InputTag title="Moblie" type='text' placeholder="Your phone number" onChange={changeMobile}/>
                    <InputTag title="Address" type='text' placeholder="806 Twin Willow Lane" onChange={changeAddress}/>
                    <InputTag title="Province" type='text' placeholder="Old Forge" onChange={changeProvince}/>
                    <div className="col-12 mb-5 p-0">
                      <CKEditor initData="<h1>Your CV</h1>" onChange={changeCV}/>
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
