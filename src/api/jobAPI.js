import axios from "axios";
import { BASE_URL, getToken } from "./Common";



export const postJob = (title, nameJob, description, category, salary, duration, province,
        district, ward, street, image) => {
    var formData = new FormData();
    formData.append('image', image);
    formData.append('document', JSON.stringify({
        title: title,
        nameJob: nameJob,
        description: description,
        category: category,
        salary: salary,
        duration: duration,
        province: province,
        detailedAddress: `${street}, ${ward}, ${district}, ${province}`,
        image: image
    }))
    axios({
        method: 'post',
        url: `${BASE_URL}postJob?token=${getToken()}`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
    })
        .then((response) => {

        })
        .catch((error) => {
            alert(error.message)
        })
}

export const getJobs= (setJobs, pageNumber =1)=>{
    axios({
        method:'get',
        url: `${BASE_URL}postItem?page=${pageNumber}`,
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            setJobs(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log( `${BASE_URL}postItem?page=${pageNumber}`)
            console.log(err.message)
        });
}

export const getJobItem= (setJob, id)=>{
    axios({
        method:'get',
        url: `${BASE_URL}postItem/${id}`,
        headers: {'Content-Type': 'application/json'},
    })
        .then(response => {
            setJob(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
       
}
