import React from "react";
import { Link } from "react-router-dom";
import InputTag from "../components/InputTag";

function UserProfileSetting() {
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
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div class="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div class="patient-details">
                        <h5>
                          <i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38
                          years
                        </h5>
                        <h5 class="mb-0">
                          <i class="fas fa-map-marker-alt"></i> Newyork, USA
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
                  <form>
                    <div class="row form-row">
                      <div class="col-12 col-md-12">
                        <div class="form-group">
                          <div class="change-avatar">
                            <div class="profile-img">
                              <img
                                src="assets/img/patients/patient.jpg"
                                alt="User Image"
                              />
                            </div>
                            <div class="upload-img">
                              <div class="change-photo-btn">
                                <span>
                                  <i class="fa fa-upload"></i> Upload Photo
                                </span>
                                <input type="file" class="upload" />
                              </div>
                              <small class="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <InputTag title="First Name" type='text' placeholder="First Name" />
                      <InputTag title="Last Name" type='text' placeholder="Last Name" />
                      <InputTag title="Date of Birth" type='date' />
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label>Skills</label>
                          <select class="form-control select">
                            <option>Select</option>
                            <option selected>Progammer</option>
                            <option>Designer</option>
                          </select>
                        </div>
                      </div>
                      <InputTag title="Email ID" type='email' placeholder="user@gmail.com" />
                      <InputTag title="Moblie" type='text' placeholder="Your phone number" />
                      <InputTag title="Address" type='text' placeholder="806 Twin Willow Lane" />
                      <InputTag title="City" type='text' placeholder="Old Forge" />
                      <InputTag title="State" type='text' placeholder="Newyork" />
                      <InputTag title="Zip Code" type='text' placeholder="13420" />
                      <InputTag title="Country" type='text' placeholder="United States" />
                    </div>
                    <div class="submit-section">
                      <button type="submit" class="btn btn-primary submit-btn">
                        Save Changes
                      </button>
                    </div>

                  </form>
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
