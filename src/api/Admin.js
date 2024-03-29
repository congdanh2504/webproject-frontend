import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const getUsers = (setUsers, pageNumber = 1) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/employees?token=${getToken()}&page=${pageNumber}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setUsers(response.data);
  });
};

export const findUser = (setUsers, keyword) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/find-user?token=${getToken()}&keyword=${keyword}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setUsers(response.data);
  });
};

export const getCompany = (setCompany, pageNumber = 1) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/employers?token=${getToken()}&page=${pageNumber}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setCompany(response.data);
  });
};

export const findCompany = (setCompany, keyword) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/find-company?token=${getToken()}&keyword=${keyword}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setCompany(response.data);
  });
};

export const deleteUser = (setUsers, user_id) => {
  axios({
    method: "DELETE",
    url: `${BASE_URL}admin/users/${user_id}?token=${getToken()}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setUsers(response.data);
  });
};

export const deleteBlog = (setBlogs, blogId) => {
  axios({
    method: "DELETE",
    url: `${BASE_URL}admin/blog/${blogId}?token=${getToken()}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setBlogs(response.data);
  });
};

export const deleteJob = (setJobs, jobId) => {
  axios({
    method: "DELETE",
    url: `${BASE_URL}admin/postItem/${jobId}?token=${getToken()}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setJobs(response.data);
  });
};

export const getReport = (setReport) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/report?token=${getToken()}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setReport(response.data.report);
    console.log(response.data.report);
  });
};

export const findPost = (setPostItem, keyword) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/find-post?token=${getToken()}&keyword=${keyword}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setPostItem(response.data);
  });
};

export const findBlog = (setBlog, keyword) => {
  axios({
    method: "GET",
    url: `${BASE_URL}admin/find-blog?token=${getToken()}&keyword=${keyword}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    setBlog(response.data);
  });
};
