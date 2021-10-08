import React from 'react'
import BlogCard from '../components/BlogCard';

const Blog = () => {
    return (
        <div className="container">
            <div class="main-wrapper" >
                <section class="comp-section comp-cards">
                    <div class="row">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Blog
