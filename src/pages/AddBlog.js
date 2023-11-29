import { CKEditor } from "ckeditor4-react";
import React, { useState } from "react";
import { getUser } from "../api/Common";
import { addBlog } from "../api/UserPost";
import imageDefault from "../assets/img/default_avatar.png";
import InputTag from "../components/InputTag";
import TextAreaTag from "../components/TextAreaTag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as FaIcons from "react-icons/fa";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({ title: "", description: "", image: null });
  const [content, setContent] = useState(null);

  const changeInput = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const changeContent = (param) => {
    setContent(param.editor.getData());
  };

  const changeImage = (param) => {
    setBlog({ ...blog, image: param.target.files[0] });
  };

  const submit = async () => {
    if (blog.title && blog.description && content && blog.image) {
      setLoading(true);
      await addBlog(blog, content, toast);
      setLoading(false);
    } else {
      toast.error("Miss data");
    }
  };

  return (
    <div class="content">
      <ToastContainer />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="profile-sidebar">
              <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                  <a href="#" class="booking-doc-img">
                    <img
                      src={
                        getUser().avatarAddress
                          ? getUser().avatarAddress
                          : imageDefault
                      }
                      alt="User Image"
                    />
                  </a>
                  <div class="profile-det-info">
                    <h3>{getUser().name}</h3>
                    <div class="patient-details">
                      <h5 class="mb-0">
                        <i class="fas fa-user-tie"></i> {getUser().type}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="card">
              <div class="card-body">
                <div class="row form-row">
                  <InputTag
                    type="text"
                    title="Title Name"
                    name="title"
                    placeholder="Write the title of the blog here!"
                    onChange={changeInput}
                    required="true"
                  />
                  <div class="form-group">
                    <label>
                      Choose image <span class="text-danger">*</span>
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      accept="image/*"
                      onChange={changeImage}
                    />
                  </div>
                  <TextAreaTag
                    name="description"
                    title="Short Description"
                    rows="5"
                    placeholder="Write short description of the blog here!"
                    onChange={changeInput}
                    required="true"
                  />
                </div>
                <div className="col-12 mb-5 p-0">
                  <CKEditor
                    initData="<h1>Write the contents of your blog here!</h1>"
                    onChange={changeContent}
                  />
                </div>
                <div class="submit-section">
                  <button
                    disabled={loading}
                    type="submit"
                    class="btn btn-primary submit-btn"
                    onClick={submit}
                  >
                    {loading && (
                      <span className="fa fa-refresh fa-spin">
                        <FaIcons.FaSpinner />
                      </span>
                    )}
                    {"  "}
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
