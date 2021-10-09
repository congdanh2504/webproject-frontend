import React from "react";
import Slider from "react-slick";

function Home() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Search Doctor, Make an Appointment</h1>
              <p>
                Discover the best doctors, clinic & hospital the city nearest to
                you.
              </p>
            </div>

            <div className="search-box">
              <form action="templateshub.net">
                <div className="form-group search-location">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  />
                  <span className="form-text">
                    Ex : Dental or Sugar Check up etc
                  </span>
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                  <i className="fas fa-search"></i> <span>Search</span>
                </button>
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
            <h2>Clinic and Specialities</h2>
            <p class="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-9">
              <Slider {...settings_clinic_specialities}>
                <div class="speicality-item text-center">
                  <div class="speicality-img mx-auto">
                    <img
                      src="assets/img/specialities/specialities-01.png"
                      class="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>Urology</p>
                </div>
                <div class="speicality-item text-center">
                  <div class="speicality-img mx-auto">
                    <img
                      src="assets/img/specialities/specialities-02.png"
                      class="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>Neurology</p>
                </div>
                <div class="speicality-item text-center">
                  <div class="speicality-img mx-auto">
                    <img
                      src="assets/img/specialities/specialities-03.png"
                      class="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>Orthopedic</p>
                </div>
                <div class="speicality-item text-center">
                  <div class="speicality-img mx-auto">
                    <img
                      src="assets/img/specialities/specialities-04.png"
                      class="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>Cardiologist</p>
                </div>
                <div class="speicality-item text-center">
                  <div class="speicality-img mx-auto">
                    <img
                      src="assets/img/specialities/specialities-05.png"
                      class="img-fluid"
                      alt="Speciality"
                    />
                    <span>
                      <i class="fa fa-circle" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>Dentist</p>
                </div>
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
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
              <div className="about-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <p>
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes
                </p>
                <a href="javascript:;">Read More..</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="doctor-slider slider"></div>
            </div>
          </div>
        </div>
      </section>
      {/* EndPopular Section */}
    </>
  );
}

export default Home;
