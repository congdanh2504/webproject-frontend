import React from 'react'

const Blog = () => {
    return (
        <>
            <div class="main-wrapper" >
                <div class="page-wrapper">
                    <div class="content container-fluid">
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
                                            <h5 class="table-avatar">
                                                <a href="#" class="avatar avatar-xs mr-2 float-left">
                                                    <img class="avatar-img rounded-circle" src="assets/img/img-01.jpg" alt="User Image" />
                                                </a>
                                                <a href="#" class="float-left">
                                                    <span> Mr. Ruby Perrin </span><br />
                                                    <i class="far fa-clock"> 1 minute ago</i>
                                                </a>
                                            </h5>
                                            <a class="btn btn-primary float-right" href="#">View</a>
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
                                            <h5 class="table-avatar">
                                                <a href="#" class="avatar avatar-xs mr-2 float-left">
                                                    <img class="avatar-img rounded-circle" src="assets/img/img-01.jpg" alt="User Image" />
                                                </a>
                                                <a href="#" class="float-left">
                                                    <span> Mr. Ruby Perrin </span><br />
                                                    <i class="far fa-clock"> 1 minute ago</i>
                                                </a>
                                            </h5>
                                            <a class="btn btn-primary float-right" href="#">View</a>
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
                                            <h5 class="table-avatar">
                                                <a href="#" class="avatar avatar-xs mr-2 float-left">
                                                    <img class="avatar-img rounded-circle" src="assets/img/img-01.jpg" alt="User Image"/>
                                                </a>
                                                <a href="#" class="float-left">
                                                    <span> Mr. Ruby Perrin </span><br />
                                                    <i class="far fa-clock"> 1 minute ago</i>
                                                </a>
                                            </h5>
                                            <a class="btn btn-primary float-right" href="#">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div>
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">...</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blog
