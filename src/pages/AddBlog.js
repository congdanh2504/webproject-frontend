import { CKEditor } from 'ckeditor4-react';
import React from 'react'
import sampleImage from '../assets/img/img-01.jpg'
import InputTag from '../components/InputTag'
import TextAreaTag from '../components/TextAreaTag'


const AddBlog = () => {
  return (
    <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
          <div class="profile-sidebar">
            <div class="widget-profile pro-widget-content">
              <div class="profile-info-widget">
                <a href="#" class="booking-doc-img">
                  <img
                    src={sampleImage}
                    alt="User Image"
                  />
                </a>
                <div class="profile-det-info">
                  <h3>Richard Wilson</h3>
                  <div class="patient-details">
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
                  <InputTag type='text' title="Title Name" placeholder="Write the title of the blog here!" />
                  <InputTag type='file' title="Image" />
                  <TextAreaTag
                      title="Short Description"
                      rows="5"
                      placeholder="Write short description of the blog here!"
                    />
                </div>
                <div className="col-12 mb-5 p-0">
                  <CKEditor initData="<h1>Write the contents of your blog here!</h1>"/>
                </div>
                <div class="submit-section">
                  <button type="submit" class="btn btn-primary submit-btn">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddBlog
