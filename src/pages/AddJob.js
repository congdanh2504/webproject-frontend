import React, { useEffect, useState } from 'react';
import InputTag from '../components/InputTag';
import TextAreaTag from '../components/TextAreaTag';
import Select from 'react-select';
import { getDistricts, getProvinces, getWards } from '../api/locationAPI';
import { postJob } from '../api/jobAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as FaIcons from 'react-icons/fa';

const AddJob = () => {
  const [loading, setLoading] = useState(false);
  const [provinceOptions, changeProvinceOptions] = useState([]);
  const [districtOptions, changeDistrictOptions] = useState([]);
  const [wardOptions, changeWardOptions] = useState([]);
  const [job, setJob] = useState({ title: "", nameJob: "", description: "", category: "", salary: "", duration: "", image: null, province: "", district: "", ward: "", street: "" });
  const updateProvince = (param) => {
    setJob({ ...job, "province": param.label });
    async function fetchDistricts() {
      let response = await getDistricts(param.value);
      changeDistrictOptions(response);
    }
    fetchDistricts();
  };

  const updateDistrict = (param) => {
    setJob({ ...job, "district": param.label });
    async function fetchWards() {
      let response = await getWards(param.value);
      changeWardOptions(response);
    }
    fetchWards();
  };

  const updateWard = (param) => setJob({ ...job, "ward": param.label });
  let defaultLocation = `${job.street},${job.ward},${job.district},${job.province},viet_nam`;
  useEffect(() => {
    async function fetchProvinces() {
      let response = await getProvinces();
      changeProvinceOptions(response);
    }
    fetchProvinces();
  }, []);

  const changeInput = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const changeImage = (param) => {
    setJob({ ...job, "image": param.target.files[0] });
  };

  const submit = async () => {
    console.log(job);
    if (job.title && job.nameJob && job.description && job.image && job.category && job.duration && job.salary
      && job.province && job.ward && job.district && job.street) {
      setLoading(true);
      await postJob(job, toast);
      setLoading(false);

    } else {
      toast.error("Miss data");
    }
  };

  return (
    <div class="content">
      <ToastContainer />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-10 col-xl-11 m-auto">
            <div class="card">
              <div class="card-body">
                <div class="row form-row">
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>Choose images <span class="text-danger">*</span></label>
                      <input
                        type="file"
                        class="form-control"
                        accept="image/*"
                        multiple
                        onChange={changeImage}
                      />
                    </div>
                  </div>
                  <InputTag type='text' name="title" title="Title" placeholder="Title" onChange={changeInput} required='true' />
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label>Types of Career <span class="text-danger">*</span></label>
                      <select class="form-control select" name="category" onChange={changeInput}>
                        <option>Select</option>
                        <option>Programmer</option>
                        <option>Designer</option>
                        <option>Editor</option>
                        <option>Web developer</option>
                        <option>Receptionist</option>
                      </select>
                    </div>
                  </div>

                  <InputTag type='text' name="nameJob" title="Carrier" placeholder="Input the name of career!" onChange={changeInput} required='true' />
                  <InputTag type='date' name="duration" title="Duration" onChange={changeInput} required='true' />
                  <InputTag type='number' name="salary" title="Salary (USD)" onChange={changeInput} required='true' />
                </div>
                <div className="form-group row">
                  <div className="col-12 col-md-6">
                    <div class="col-12">
                      <div class="form-group">
                        <label>Province <span class="text-danger">*</span></label>
                        <Select placeholder="Province" options={provinceOptions} onChange={updateProvince} />
                      </div>
                    </div>
                    <div class="col-12 ">
                      <div class="form-group">
                        <label>District <span class="text-danger">*</span></label>
                        <Select placeholder="District" options={districtOptions} onChange={updateDistrict} />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Ward <span class="text-danger">*</span></label>
                        <Select placeholder="Ward" options={wardOptions} onChange={updateWard} />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Street <span class="text-danger">*</span></label>
                        <input class="form-control select" name="street" onChange={changeInput} placeholder="Street">
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
                    name="description"
                    placeholder="Write short description of the blog here!"
                    onChange={changeInput}
                    required='true'
                  />
                </div>

                <div class="submit-section">
                  <button disabled={loading} type="submit" class="btn btn-primary submit-btn" onClick={submit}>
                    {loading && <span className="fa fa-refresh fa-spin"><FaIcons.FaSpinner /></span>}
                    {"  "}
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
