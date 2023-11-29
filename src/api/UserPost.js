import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const addBlog = async (blog, content, toast) => {
  var formData = new FormData();
  formData.append("image", blog.image);
  formData.append(
    "document",
    JSON.stringify({
      title: blog.title,
      description: blog.description,
      content: content,
    }),
  );
  await axios({
    method: "post",
    url: `${BASE_URL}blog?token=${getToken()}`,
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
  })
    .then((response) => {
      toast.success("Successfully");
    })
    .catch((error) => {
      toast.error("Error");
    });
};
export const getBlogs = (setBlogs, pageNumber = 1) => {
  axios({
    method: "get",
    url: `${BASE_URL}blog?page=${pageNumber}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setBlogs(response.data);
  });
};

export const getNewBlogs = (setNewBlogs) => {
  axios({
    method: "GET",
    url: `${BASE_URL}blog/new/4`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setNewBlogs(response.data);
  });
};

export const getById = (setBlog, id) => {
  axios({
    method: "get",
    url: `${BASE_URL}blog/${id}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setBlog(response.data);
  });
};
