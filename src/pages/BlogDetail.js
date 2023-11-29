import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import { getById, getNewBlogs } from "../api/UserPost";
import Loading from "../components/Loading";
import MainBlogContent from "../components/MainBlogContent";
import PostCard from "../components/PostCard";

const BlogDetail = () => {
  const id = useParams("id");
  const [blog, setBlog] = useState(null);
  const [newBlogs, setNewBlogs] = useState(null);

  useEffect(() => {
    getById(setBlog, id.id);
  }, [id]); //change MainBlogContent when the Id changes

  useEffect(() => {
    getNewBlogs(setNewBlogs);
  }, []);

  return (
    <>
      <Breadcrumb title="Blog Details"></Breadcrumb>
      <div className="container bg-white mt-5 mb-5">
        <div className="row">
          <div class="col-md-8">
            {blog ? <MainBlogContent blog={blog} /> : <Loading />}
          </div>
          <div class="col-md-4">
            <div class="sticky-top">
              <div class="wrapper__list__article-small mt-5">
                {newBlogs ? (
                  newBlogs.map((blog) => {
                    return (
                      <PostCard
                        id={blog._id}
                        image={blog.imageAddress}
                        title={blog.title}
                        time={blog.created_at}
                        user={blog.user}
                      />
                    );
                  })
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
