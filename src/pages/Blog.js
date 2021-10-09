import React from 'react'

const Blog = () => {
    return (
        <>
            <div class="main-wrapper" >
                <section class="comp-section comp-cards">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <img alt="Card Image" src={require("../assets/img/img-01.jpg")} class="card-img-top" />
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with image and button</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <ul class="available-info">
                                        <li>
                                            <i class="fas fa-user"></i> Ruby Perrin
                                        </li>
                                        <li>
                                            <i class="far fa-clock"></i> 1 minute ago
                                        </li>
                                    </ul>
                                    <a class="btn btn-primary" href="#">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <img alt="Card Image" src={require("../assets/img/img-01.jpg")} class="card-img-top" />
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with image and button</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <ul class="available-info">
                                        <li>
                                            <i class="fas fa-user"></i> Ruby Perrin
                                        </li>
                                        <li>
                                            <i class="far fa-clock"></i> 1 minute ago
                                        </li>
                                    </ul>
                                    <a class="btn btn-primary" href="#">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 d-flex">
                            <div class="card flex-fill">
                                <img alt="Card Image" src={require("../assets/img/img-01.jpg")} class="card-img-top" />
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Card with image and button</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <ul class="available-info">
                                        <li>
                                            <i class="fas fa-user"></i> Ruby Perrin
                                        </li>
                                        <li>
                                            <i class="far fa-clock"></i> 1 minute ago
                                        </li>
                                    </ul>
                                    <a class="btn btn-primary" href="#">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Blog
