import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import sampleImage from '../assets/img/img-01.jpg'

function BlogCard() {
    return (
        <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="card flex-fill">
                <img alt="Card Image" src={sampleImage} class="card-img-top" />
                <div class="card-header">
                    <h5 class="card-title mb-0">
                        Card with image and button
                        <i class="far fa-eye float-right"> 6969</i>
                    </h5>
                </div>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h5 class="table-avatar">
                        <a href="#" class="avatar avatar-xs mr-2 float-left">
                            <img class="avatar-img rounded-circle" src="assets/img/img-01.jpg" alt="User Image" />
                        </a>
                        <a href="#" class="float-left">
                            <span> Mr. Ruby Perrin </span><br />
                            <i class="far fa-clock"> 1 minute ago</i><br />
                        </a>
                    </h5>
                    <Link to="/blog/detail" className="btn btn-primary float-right">View</Link>
                    {/* <Link to="/blog/detail" className="btn btn-primary float-right">View</Link> */}
                </div>
            </div>
        </div>
    )
}

export default BlogCard
