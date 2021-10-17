import React from 'react'
import Moment from 'react-moment';

const MainBlogContent = (props) => {
    return (
        <div class="wrap__article-detail">
            <div class="wrap__article-detail-title">
                <h1>
                    {props.blog.title}
                </h1>
                <h3>
                    {props.blog.description}
                </h3>
            </div>
            <hr />
            <div class="wrap__article-detail-info">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <span>by </span>
                        <a href="#">
                            {props.blog.user.name}
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <span class="text-dark text-capitalize ml-1">
                        <i class="far fa-clock text-muted">
                        <Moment format="YYYY/MM/DD">
                            {props.blog.created_at}
                        </Moment>
                        </i>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="wrap__article-detail-image mt-4">
                <figure>
                    <img src={props.blog.imageAddress} alt="" class="img-fluid" />
                </figure>
            </div>
            <div class="wrap__article-detail-content">
                <div
                dangerouslySetInnerHTML={{
                    __html: props.blog.content
                }}></div>
            </div>
        </div>

    );
}

export default MainBlogContent
