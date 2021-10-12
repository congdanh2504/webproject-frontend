import React from 'react'
import InputTag from '../components/InputTag'
import TextAreaTag from '../components/TextAreaTag'

const AddJob = () => {
  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-10 col-xl-11 m-auto">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="row form-row">
                    <InputTag type='file' title="Image" />
                    <InputTag type='text' title="Company" placeholder="Your company" />

                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Types of Career</label>
                        <select class="form-control select">
                          <option>Select</option>
                          <option>Progammer</option>
                          <option>Designer</option>
                          <option> Editor</option>
                          <option> Web developer</option>
                          <option> Receptionist</option>
                        </select>
                      </div>
                    </div>

                    <InputTag type='text' title="Carrer" placeholder="Input the name of career!" />
                    <InputTag type='date' title="Duration" />
                    <InputTag type='number' title="Salary (USD)" />
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-md-6">
                      <div class="col-12">
                        <div class="form-group">
                          <label>Tỉnh/ Thành phố</label>
                          <select class="form-control select">
                            <option>Select</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 ">
                        <div class="form-group">
                          <label>Quận/ Huyện</label>
                          <select class="form-control select">
                            <option>Select</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Xã/Thị trấn</label>
                          <select class="form-control select">
                            <option>Select</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mh-100">
                      <div className="w-100 h-100 bg-primary">
                        <label>Google Maps</label>
                        <h3>Google Maps is shown here!</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row form-row">
                    <TextAreaTag
                      title="Short Description"
                      rows="5"
                      placeholder="Write short description of the blog here!"
                    />
                  </div>

                  <div class="submit-section">
                    <button type="submit" class="btn btn-primary submit-btn">
                      Post
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

export default AddJob
