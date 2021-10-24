import React from 'react'
import Moment from 'react-moment'
import { Link } from "react-router-dom";
import sampleImage from '../assets/img/img-01.jpg'
const PostCard = (props) => {
  return (
    <div className="mb-3 ">
      <div className="card__post card__post-list">
        <div className="image-sm">
          <Link to={`/blog/detail/${props.id}`}>
            <img src={props.image} className="img-fluid" style={{ height: 80, objectFit: "cover" }} alt="" />
          </Link>
        </div>
        <div className="card__post__body">
          <div className="card__post__content">
            <div className="card__post__author-info mb-2">
              <ul className="list-inline" style={{ minWidth: '100%' }}>
                <li className="list-inline-item">
                  <span className="text-primary">
                    By {props.user.name}
                  </span>
                </li>
                <li className="list-inline-item float-right">
                  <span className="text-dark text-capitalize">
                    <Moment format="YYYY/MM/DD">{props.time}</Moment>
                  </span>
                </li>
              </ul>
            </div>
            <div className="card__post__title">
              <h6>
                <Link to={`/blog/detail/${props.id}`}>
                  {props.title}
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default PostCard
