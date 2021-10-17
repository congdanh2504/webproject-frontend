import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';
import { Link, NavLink } from 'react-router-dom'
import Breadcrumb from "../components/Breadcrumb";
import { getUser } from '../api/Common';
import Pagination from 'react-js-pagination'
import { getBlogs } from '../api/UserPost';
import Loading from '../components/Loading';

const Blog = () => {
  const [blogs, setBlogs] = useState()

  useEffect(() => {
    getBlogs(setBlogs)
  }, [])

  return (
    <div>
      <Breadcrumb title="Blog" />
      <div className="container mt-3">
        <div className="main-wrapper" >
          <section className="comp-section comp-cards mt-3">
            {getUser() && <Link to='blog/add-blog' className="add-new-btn ">
              Add your post
            </Link>} 
            <div className="row">
              {blogs ? blogs.data.map((data, index) => { 
                return <BlogCard key={data._id} user={data.user} id={data._id} title={data.title} imageAddress={data.imageAddress} views={data.views} time={data.created_at}/>
              }): <Loading/>}
            </div>
            { blogs && <div className="mt-3">
              <Pagination 
                activePage={blogs.current_page}
                itemsCountPerPage={blogs.per_page}
                totalItemsCount={blogs.total}
                pageRangeDisplayed={5}
                onChange={(num) => getBlogs(setBlogs, num)}
                itemClass="page-item"
                linkClass="page-link"
                firstPageText="First"
                lastPageText="Last"
              />
              </div>
              }
            
          </section>
        </div>
      </div>
    </div>
  );
}
export default Blog
