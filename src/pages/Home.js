import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../components/CategoryCard";
import JobCard_Vertical from "../components/JobCard_Vertical";
import { getJobs } from "../api/jobAPI";
import { getProvinces } from "../api/locationAPI";
import Select from "react-select";

function Home() {
  const [jobs, setJobs] = useState();
  const [provinceOptions, changeProvinceOptions] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [province, changeProvince] = useState("");
  const updateProvince = (param) => {
    changeProvince(param.label);
  };

  useEffect(() => {
    getJobs(setJobs);
    async function fetchProvinces() {
      let response = await getProvinces();
      changeProvinceOptions(response);
    }
    fetchProvinces();
  }, []);

  const settings_clinic_specialities = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings_popular = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const style = {
    control: base => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none'
    })
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>What do you want to do?</h1>
            </div>

            <div className="search-box">
              <form>
                <div className="form-group search-location">
                  <Select
                    styles={style}
                    className="form-control"
                    placeholder="Province"
                    options={provinceOptions}
                    onChange={updateProvince}
                  />
                </div>
                <div className="form-group search-info">
                  <input
                    onChange={(param) => setKeyword(param.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Find a job, a field, a company, ..."
                  />
                </div>
                <Link to={`/jobs?location=${province}&keyword=${keyword}`} >
                  <button className="btn btn-primary search-btn">
                  <i className="fas fa-search"></i><span>Search</span>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* <!-- Clinic and Specialities --> */}
      <section class="section section-specialities">
        <div class="container-fluid">
          <div class="section-header text-center">
            <h2>Job Categories</h2>
            <p class="sub-title">
              We provide a wide range of fields. Choose the career that is right
              for you!
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-9">
              <Slider {...settings_clinic_specialities}>
                <CategoryCard title="Programmer" />
                <CategoryCard title="Editor" />
                <CategoryCard title="Receptionist" />
                <CategoryCard title="Web developer" />
                <CategoryCard title="Designer" />
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Clinic and Specialities --> */}

      {/* Popular Section */}
      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header ">
                <h2>Latest jobs</h2>
                <p>View all latest jobs that you interest</p>
              </div>
              <div className="about-content">
                <p>
                See the earliest registered jobs, do not miss the opportunity to participate in business activities, start-up management.
                </p>
                <p>      
                Visit the website regularly to be updated with the latest and relevant jobs for your industry.
                Jobhub was created to help employers, businesses, and employees connect. With Jobhub, finding jobs and hiring workers will be a lot easier
                </p>
                <Link to="/jobs">View More</Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="doctor-slider slider">
                <Slider {...settings_popular}>
                  {jobs
                    ? jobs.data.map((data) => {
                        return (
                          <JobCard_Vertical
                            key={data._id}
                            user={data.user}
                            id={data._id}
                            title={data.title}
                            imagesAddress={data.imagesAddress}
                            nameJob={data.nameJob}
                            duration={data.duration}
                            salary={data.salary}
                            address={data.address}
                            rate={data.rate}
                          />
                        );
                      })
                    : null}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EndPopular Section */}

      {/* <!-- Availabe Features --> */}
      <section class="section section-features">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 features-img">
              <img
                src="assets/img/partners/feature.png"
                class="img-fluid"
                alt="Feature"
              />
            </div>
            <div class="col-md-7">
              <div class="section-header">
                <h2 class="mt-2">Our Partners</h2>
              </div>
              <Slider {...settings_clinic_specialities}>
                <div class="feature-item text-center">
                  <img
                    src="assets/img/partners/partners-01.png"
                    class="img-fluid mx-auto img-fix"
                    alt="Feature"
                  />
                  <p>Google</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/partners/partners-02.png"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>Microsoft</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/partners/partners-03.png"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>VinGroup</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/partners/partners-04.png"
                    class="img-fluid mx-auto img-fix"
                    alt="Feature"
                  />
                  <p>VKU</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/partners/partners-05.png"
                    class="img-fluid mx-auto img-fix"
                    alt="Feature"
                  />
                  <p>Apple</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Availabe Features --> */}
    </>
  );
}

export default Home;
