import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const addBlog = (title, description, content, image) => {
    var formData = new FormData();
    formData.append('image', image)
    formData.append('document', JSON.stringify({
        title: title,
        description: description,
        content: content,
        image: image
    }))
    axios({
        method: 'post',
        url: `${BASE_URL}addBlog?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    })  
}
export const getBlogs = (setBlogs, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blog?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setBlogs(response.data)
      }).catch(error => {

    });
}

export const getNewBlogs = (setNewBlogs)=>{
    axios({
        method: 'GET',
        url: `${BASE_URL}new-blogs`,
        headers: {'Content-Type': 'application/json'},
    }).then(response => {
        setNewBlogs(response.data)
    })
}


export const getById = (setBlog, id) => {
    axios({
        method: 'get',
        url: `${BASE_URL}blog/${id}`,
        headers: {'Content-Type': 'application/json'},
        }).then(response => {
        setBlog(response.data)
    })
}







