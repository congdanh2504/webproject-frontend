import React from 'react'
import sampleImage from '../assets/img/img-01.jpg'

const MainBlogContent = () => {
    return (

        <div class="wrap__article-detail">
            <div class="wrap__article-detail-title">
                <h1>
                    These Are the 5 Big Tech Stories to Watch in 2017
                </h1>
                <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, hic.
                </h3>
            </div>
            <hr />
            <div class="wrap__article-detail-info">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <span>by </span>
                        <a href="#">
                            Mr. Ruby Perrin,
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <span class="text-dark text-capitalize ml-1">
                            descember 09, 2016
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <span class="text-dark text-capitalize">
                            in
                        </span>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            business
                        </a>
                    </li>
                </ul>
            </div>
            <div class="wrap__article-detail-image mt-4">
                <figure>
                    <img src={sampleImage} alt="" class="img-fluid" />
                </figure>
            </div>
            <div class="wrap__article-detail-content">
                <div class="total-views">
                    <div class="total-views-read">
                        15.k
                        <span>
                            views
                        </span>
                    </div>
                </div>
                <p class="has-drop-cap-fluid">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One
                    day however a small line of blind text by the name of Lorem Ipsum decided to leave for
                    the far World of
                    Grammar.
                </p>

                <blockquote class="block-quote">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at
                        its layout.
                    </p>
                    <cite>
                        Tom Cruise
                    </cite>
                </blockquote>

                <h5>How Tech Startup Survive Without Funding</h5>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the
                    blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics,
                    a large language
                    ocean.A small river named Duden flows by their place and supplies it with the necessary
                    regelialia.
                </p>
            </div>


        </div>

    );
}

export default MainBlogContent