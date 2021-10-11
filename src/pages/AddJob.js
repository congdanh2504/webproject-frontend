import React from 'react'
import sampleImage from '../assets/img/img-01.jpg'
import InputTag from '../components/InputTag'
const AddJob = () => {
  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="row form-row">
                    <InputTag type='text' title="Carrer" placeholder="Input the name of career!" />
                    <InputTag type='text' title="Company" placeholder="Your company" />
                    <InputTag type='date' title="Duration" />
                    <InputTag type='number' title="Salary (USD)" />
                    <InputTag type='text' title="Address" /> {/*update later*/}

                    <div class="col-12">
                      <div class="form-group">
                        <label>Short Description</label>
                        <textarea
                          type="text"
                          class="form-control "
                          rows='5'
                          placeholder="Write short description of the blog here!"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-form-label col-md-2">Types of Career</label>
                    <div class="col-md-3">
                      <select class="form-control">
                        <option>Category</option>
                        <option> Progammer</option>
                        <option> Designer</option>
                        <option> Editor</option>
                        <option> Web developer</option>
                        <option> Receptionist</option>
                      </select>
                    </div>
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
