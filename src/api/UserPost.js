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