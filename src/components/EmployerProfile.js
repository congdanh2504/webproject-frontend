import React, { useEffect, useState } from "react";
import Breadcrumb from './Breadcrumb'
import JobCard from "../components/JobCard";
import image from "../assets/img/default_avatar.png";
import Pagination from 'react-js-pagination'
import { getMyJobs } from '../api/jobAPI';
import { useParams } from 'react-router'
import { getUserById } from '../api/loginAPI'



const EmployerProfile = (props) => {
  const [jobs, setJobs] = useState();
  const [user, setUser] = useState(null)
  const id = useParams('id')
 
  useEffect(() => {
    getUserById(id.id, setUser)
    getMyJobs(setJobs, id.id);
  }, [])

  return (
    <div>
      <div>
        <Breadcrumb title="Employee Profile" />
        <div class="content">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div class="doctor-widget">
                  <div class="doc-info-left">
                    <div class="doctor-img">
                      <img src={user?.avatarAddress ? user.avatarAddress : image} class="img-fluid fix-image" alt="User Image" />
                    </div>
                    <div class="doc-info-cont">
                      <h4 class="doc-name">{user?.name ? user?.name : "Name of Employeer"}</h4>
                      <div class="clini-infos">
                        <ul>
                          <li><i class="fas fa-map-marker-alt"></i>{user?.address?.detail ? user.address.detail : "Address"} </li>
                          <li><i class="far fa-envelope"></i>{user?.email ? user?.email : "abc@gmail.com"}</li>
                          <li><i class="fas fa-mobile"></i> {user?.mobile ? user?.mobile : "0123424"} </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-8 col-xl-9 m-auto">
              {(jobs && jobs.data.length > 0) ?
                <h3 className="bg-primary text-white text-center p-3 mb-4">All posts!</h3>:
                <div className="alert alert-danger">Don't have any post.</div>
              }
              {jobs && jobs.data.length > 0 && jobs.data.map((data, index) => {
                return <JobCard
                  key={data._id} user={data.user}
                  id={data._id} title={data.title}
                  imagesAddress={data.imagesAddress}
                  description={data.description}
                  nameJob={data.nameJob}
                  duration={data.duration}
                  salary={data.salary}
                  category={data.category}
                  address={data.address}
                  rate={data.rate}
                  setJobs={setJobs}
                />
              })}
              {jobs && jobs.data.length > 0 && <div className="row mt-3 justify-content-center">
                <Pagination
                  activePage={jobs.current_page}
                  itemsCountPerPage={jobs.per_page}
                  totalItemsCount={jobs.total}
                  pageRangeDisplayed={5}
                  onChange={(num) => getMyJobs(setJobs, id, num)}
                  itemClass="page-item"
                  linkClass="page-link"
                  firstPageText="First"
                  lastPageText="Last"
                />
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerProfile
