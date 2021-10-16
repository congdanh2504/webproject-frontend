import { CKEditor } from 'ckeditor4-react';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { getUser } from '../api/Common';
import { addBlog } from '../api/UserPost';
import imageDefault from '../assets/img/default_avatar.png'
import InputTag from '../components/InputTag'
import TextAreaTag from '../components/TextAreaTag'

const AddBlog = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null)
  const [image, setImage] = useState(null)
  const [content, setContent] = useState(null)
  const history = useHistory()

  const changeTitle = (param) => {
    setTitle(param.target.value)
  }

  const changeDescription = (param) => {
    setDescription(param.target.value)
  }

  const changeContent = (param) => {
    setContent(param.editor.getData())
  }

  const changeImage = (param) => {
    setImage(param.target.files[0])
  }

  const submit = () => {
    if (title && description && content && image) {
      addBlog(title, description, content, image)
      history.push('/blog')
    }
  }

  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="profile-sidebar">
              <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                  <a href="#" class="booking-doc-img">
                    <img
                      src={getUser().avatarAddress ? getUser().avatarAddress : imageDefault}
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
                  <InputTag type='text' title="Title Name" placeholder="Write the title of the blog here!" onChange={changeTitle} />
                  <div class="form-group">
                    <label>Choose image</label>
                    <input
                      type="file"
                      class="form-control"
                      accept="image/*"
                      onChange={changeImage}
                    />
                  </div>
                  <TextAreaTag
                    title="Short Description"
                    rows="5"
                    placeholder="Write short description of the blog here!"
                    onChange={changeDescription}
                  />
                </div>
                <div className="col-12 mb-5 p-0">
                  <CKEditor initData="<h1>Write the contents of your blog here!</h1>" onChange={changeContent} />
                </div>
                <div class="submit-section">
                  <button type="submit" class="btn btn-primary submit-btn" onClick={submit}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog
