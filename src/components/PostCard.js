import React from 'react'
import sampleImage from '../assets/img/img-01.jpg'

const PostCard = () => {
  return (
    <div class="mb-3">
      <div class="card__post card__post-list">
        <div class="image-sm">
          <a href="./card-article-detail-v1.html">
            <img src={sampleImage} class="img-fluid" alt="" />
          </a>
        </div>
        <div class="card__post__body ">
          <div class="card__post__content">
            <div class="card__post__author-info mb-2">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <span class="text-primary">
                    by david hall
                  </span>
                </li>
                <li class="list-inline-item">
                  <span class="text-dark text-capitalize">
                    descember 09, 2016
                  </span>
                </li>
              </ul>
            </div>
            <div class="card__post__title">
              <h6>
                <a href="./card-article-detail-v1.html">
                  6 Best Tips for Building a Good Shipping Boat
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
