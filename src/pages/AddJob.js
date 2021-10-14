import React, { useEffect, useState } from 'react'
import InputTag from '../components/InputTag'
import TextAreaTag from '../components/TextAreaTag'
import Select from 'react-select'
import {getDistricts, getProvinces, getWards} from '../api/locationAPI'

const AddJob = () => {
  const [provinceOptions, changeProvinceOptions] = useState([]);
  const [districtOptions, changeDistrictOptions] = useState([]);
  const [wardOptions, changeWardOptions] = useState([]);
  const [province, changeProvince] = useState("");
  const updateProvince = (param) => {
      changeProvince(param.label)
      async function fetchDistricts() {
          let response = await getDistricts(param.value)
          changeDistrictOptions(response)
      }
      fetchDistricts()  
  }

  const [district, changeDistrict] = useState("");
  const updateDistrict = (param) => {
      changeDistrict(param.label)
      async function fetchWards() {
          let response = await getWards(param.value)
          changeWardOptions(response)
      }
      fetchWards()  
  }    

  const [ward, changeWard] = useState("");
  const updateWard = (param) => changeWard(param.label)
  const [street, changeStreet] = useState("");
  const updateStreet = (param) => changeStreet(param.target.value)
  var defaultLocation = `${street},${ward},${district},${province},viet_nam`;
  useEffect(() => {
    async function fetchProvinces() {
        let response = await getProvinces()
        changeProvinceOptions(response)
    }
    fetchProvinces()      
  }, [])

  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-10 col-xl-11 m-auto">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="row form-row">
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Choose images</label>
                        <input
                          type="file"
                          class="form-control"
                          accept="image/*"
                          multiple
                        />
                      </div>
                    </div>
                    <InputTag type='text' title="Title" placeholder="Title" />
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

                    <InputTag type='text' title="Carrier" placeholder="Input the name of career!" />
                    <InputTag type='date' title="Duration" />
                    <InputTag type='number' title="Salary (USD)" />
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-md-6">
                      <div class="col-12">
                        <div class="form-group">
                          <label>Province</label>
                          <Select placeholder="Province" options={provinceOptions}  onChange={updateProvince} />
                        </div>
                      </div>
                      <div class="col-12 ">
                        <div class="form-group">
                          <label>District</label>
                          <Select placeholder="District" options={districtOptions}  onChange={updateDistrict}/>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Ward</label>
                          <Select placeholder="Ward" options={wardOptions}  onChange={updateWard}/>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Street</label>
                          <input class="form-control select" onChange={updateStreet} placeholder="Street">
                          </input>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mh-100">
                      <div className="w-100 h-100">
                        <iframe
                          width="490" 
                          height="350"
                          loading="lazy"
                          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBT-FcupKSzJG1IuC4ZtNyQ-Qg0rdoY47k&q=${defaultLocation}`}>
                        </iframe>
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
