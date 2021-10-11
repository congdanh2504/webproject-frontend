import React from 'react'
import MainBlogContent from '../components/MainBlogContent'
import PostCard from '../components/PostCard'

const BlogDetail = () => {
  return (
    <div className='container bg-white mt-3'>
      
      <div className="row">
        <div class="col-md-8">
          <MainBlogContent />
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
