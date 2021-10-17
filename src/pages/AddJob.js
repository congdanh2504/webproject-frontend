import React, { useEffect, useState } from 'react'
import InputTag from '../components/InputTag'
import TextAreaTag from '../components/TextAreaTag'
import Select from 'react-select'
import { getDistricts, getProvinces, getWards } from '../api/locationAPI'
import { postJob } from '../api/jobAPI';
import { useHistory } from 'react-router';

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

  const history = useHistory()

  const [title, setTitle] = useState(null)
  const [nameJob, setNameJob] = useState(null)
  const [description, setDescription] = useState(null)
  const [category, setCategory] = useState(null)
  const [salary, setSalary] = useState(null)
  const [duration, setDuration] = useState(null)
  const [detail, setDetail] = useState(null)
  const [image, setImage] = useState(null)

  const changeTitle = (param) => {
    setTitle(param.target.value)
  }

  const changeDescription = (param) => {
    setDescription(param.target.value)
  }

  const changeNameJob = (param) => {
    setNameJob(param.target.value)
  }

  const changeImage = (param) => {
    setImage(param.target.files[0])
  }

  // const changeImage =(param) => {
  //   const fileToAdd = param.target.files
  //   setImage([...image,...fileToAdd])
  // }

  const changeCategory = (param) =>{
    setCategory(param.target.value)
  }

  const changeSalary = (param) => {
    setSalary(param.target.value)
  }

  const changeDuration = (param)=>{ 
    setDuration(param.target.value)   
  }

  const submit = (e) => {
    if(title && nameJob && description  && image &&category && duration &&salary
      &&province && ward && district && street) {
        postJob(title, nameJob, description,category, salary, duration, province, 
          district,ward ,street, image)
        history.push('/jobs')
    }else{
      alert('Miss data')
      e.preventDefault();
    }
  }

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
                          onChange={changeImage}
                        />
                      </div>
                    </div>
                    <InputTag type='text' title="Title" placeholder="Title" onChange={changeTitle} />
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Types of Career</label>
                        <select class="form-control select" onChange={changeCategory}>
                          <option>Select</option>
                          <option>Progammer</option>
                          <option>Designer</option>
                          <option> Editor</option>
                          <option> Web developer</option>
                          <option> Receptionist</option>
                        </select>
                      </div>
                    </div>

                    <InputTag type='text' title="Carrier" placeholder="Input the name of career!" onChange={changeNameJob}/>
                    <InputTag type='date' title="Duration"  onChange={changeDuration}/>
                    <InputTag type='number' title="Salary (USD)" onChange={changeSalary}/>
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-md-6">
                      <div class="col-12">
                        <div class="form-group">
                          <label>Province</label>
                          <Select placeholder="Province" options={provinceOptions} onChange={updateProvince} />
                        </div>
                      </div>
                      <div class="col-12 ">
                        <div class="form-group">
                          <label>District</label>
                          <Select placeholder="District" options={districtOptions} onChange={updateDistrict} />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label>Ward</label>
                          <Select placeholder="Ward" options={wardOptions} onChange={updateWard} />
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
                      onChange={changeDescription}
                    />
                  </div>

                  <div class="submit-section">
                    <button type="submit" class="btn btn-primary submit-btn" onClick={submit}> 
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
