import { CKEditor } from "ckeditor4-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api/Common";
import InputTag from "../components/InputTag";
import image from '../assets/img/default_avatar.png'
import { employeeUpdateProfile } from "../api/updateProfile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as FaIcons from 'react-icons/fa'
import { getProvinces } from "../api/locationAPI";
import Select from 'react-select'

function UserProfileSetting() {
  const [loading, setLoading] = useState(false)
  const [overviewAvatar, setOverviewAvatar] = useState(null)
  const [employee, setEmployee] = useState({avatar: null, name: getUser().name, dob: getUser().dob, mobile: getUser().mobile, detail: getUser().address.detail, province: getUser().address.province})
  const [cv, setCV] = useState(getUser().cv)
  const [provinceOptions, changeProvinceOptions] = useState([]);

  const changeInput = (e) => {
    setEmployee({...employee, [e.target.name]: e.target.value})
  }

  const changeProvince = (param) => {
    setEmployee({...employee, "province": param.label})
  }

  const changeCV = (param) => {
    setCV(param.editor.getData())
  }

  const submit = async () => {
    setLoading(true)
    await employeeUpdateProfile(employee, cv, toast)
    setLoading(false)
  }

  const changeAvatar = (param) => {
    var file = param.target.files[0];
    setEmployee({...employee, "avatar": file})
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setOverviewAvatar(reader.result)
    }.bind(this);
  }

  useEffect(() => {
    async function fetchProvinces() {
      let response = await getProvinces()
      changeProvinceOptions(response)
    }
    fetchProvinces()
  }, [])

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
                    Update Profile
                  </li>
                </ol>
              </nav>
              <h2 class="breadcrumb-title">Profile</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb --> */}
      <ToastContainer/>
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
                    <InputTag title="Name" defaultValue={employee.name} name="name" type='text' placeholder="Last Name" onChange={changeInput}/>
                    <InputTag title="Date of Birth" defaultValue={employee.dob} type='date' name="dob" onChange={changeInput}/>  
                    <InputTag title="Mobile" defaultValue={employee.mobile} name="mobile" type='text' placeholder="Your phone number" onChange={changeInput}/>
                    <InputTag title="Address" defaultValue={employee.detail} name="detail" type='text' placeholder="806 Twin Willow Lane" onChange={changeInput}/>
                    <div class="col-6">
                      <div class="form-group">
                        <label>Province</label>
                        <Select placeholder="Province" options={provinceOptions} onChange={changeProvince} />
                      </div>
                    </div>
                    <div className="col-12 mb-5 p-0">
                      <CKEditor initData={cv} onChange={changeCV}/>
                    </div>
                  </div>
                  <div class="submit-section">
                    <button disabled={loading} type="submit" class="btn btn-primary submit-btn" onClick={submit}>
                    {loading && <span className="fa fa-refresh fa-spin"><FaIcons.FaSpinner/></span>}
                    {"  "}
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
