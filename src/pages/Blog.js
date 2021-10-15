import React from 'react'
import BlogCard from '../components/BlogCard';
import { Link, NavLink } from 'react-router-dom'
import Breadcrumb from "../components/Breadcrumb";
import { getUser } from '../api/Common';
const Blog = () => {
  return (
    <>
      <Breadcrumb title="Blog" />
      <div className="container mt-3">
        <div className="main-wrapper" >
          <section className="comp-section comp-cards mt-3">
            {getUser() && <Link to='blog/add-blog' className="add-new-btn ">
              Add your post
            </Link>} 
            <div className="row">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Blog
