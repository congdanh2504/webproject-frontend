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
              <div className="doctor-slider slider">
                <Slider {...settings_popular}>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300 - $1000
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300 - $1000
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300 - $1000
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300 - $1000
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">Ruby Perrin</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300 - $1000
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
                src="assets/img/features/feature.png"
                class="img-fluid"
                alt="Feature"
              />
            </div>
            <div class="col-md-7">
              <div class="section-header">
                <h2 class="mt-2">Availabe Features in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
              <Slider {...settings_clinic_specialities}>
                <div class="feature-item text-center">
                  <img
                    src="assets/img/features/feature-01.jpg"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>Patient Ward</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/features/feature-02.jpg"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>Test Room</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/features/feature-03.jpg"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>ICU</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/features/feature-04.jpg"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>Laboratory</p>
                </div>

                <div class="feature-item text-center">
                  <img
                    src="assets/img/features/feature-05.jpg"
                    class="img-fluid mx-auto"
                    alt="Feature"
                  />
                  <p>Operation</p>
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
