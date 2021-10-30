import React from 'react'
import Breadcrumb from './Breadcrumb'

function EmployeeProfile(props) {
  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

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
                      <img src={props.user.avatarAddress} class="img-fluid" alt="User Image" />
                    </div>
                    <div class="doc-info-cont">
                      <h4 class="doc-name">{props.user.name}</h4>
                      <div class="clini-infos">
                        <ul>
                          <li><i class="fas fa-map-marker-alt"></i>{props.user.address.detail} </li>
                          <li><i class="far fa-envelope"></i>{props.user.email}</li>
                          <li><i class="fas fa-child"></i>{getAge(props.user.dob)} years old</li>
                          <li><i class="fas fa-mobile"></i> {props.user.mobile} </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container card'>
          <h1><b>The CV</b></h1>
          <div
            dangerouslySetInnerHTML={{
              __html: props.user.cv
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeProfile
