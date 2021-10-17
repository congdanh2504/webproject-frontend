import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getById } from '../api/UserPost'
import Loading from '../components/Loading'
import MainBlogContent from '../components/MainBlogContent'
import PostCard from '../components/PostCard'

const BlogDetail = () => {
  const id = useParams('id')
  const [blog, setBlog] = useState(null)
  
  useEffect(() => {
    getById(setBlog, id.id)
  }, [])

  return (
    <div className='container bg-white mt-3'>
      <div className="row">
        <div class="col-md-8">
          {blog ? <MainBlogContent blog={blog}/> : <Loading/>}
        </div>
        <div class="col-md-4">
          <div class="sticky-top">
            <div class="wrapper__list__article-small">
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
