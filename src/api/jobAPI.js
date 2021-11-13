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
        url: `${BASE_URL}postItem?token=${getToken()}`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
    })
    .then((response) => {

    })
    .catch((error) => {
        alert(error.message)
    })
}

export const getJobs = (setJobs, pageNumber = 1) => {
    axios({
        method: 'get',
        url: `${BASE_URL}postItem?page=${pageNumber}`,
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        setJobs(response.data)
    })
    .catch(err => {
        console.log(`${BASE_URL}postItem?page=${pageNumber}`)
    });
}

export const getJobItem = (setJob, id) => {
    axios({
        method: 'get',
        url: `${BASE_URL}postItem/${id}`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => {
            setJob(response.data)
            // console.log(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })

}

// get all job is post by employer
export const getMyJobs = (setJobs, id, pageNumber = 1) => {
    axios({
        method: 'GET',
        url: `${BASE_URL}postItem/myPost/${id}?page=${pageNumber}`,
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        // console.log(response.data)
        setJobs(response.data)      
    })
}

export const addReview = (id, title, message, rate, setJob, idJob) => {
    axios({
        method: 'POST',
        url: `${BASE_URL}review?token=${getToken()}`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            id : id,
            title : title,
            message : message,
            rate : rate
        }
    }).then((res) => {
        getJobItem(setJob, idJob)
    })
}

export const deleteJob = (setJobs, jobId) =>{
    axios({
      method: 'DELETE',
      url: `${BASE_URL}postItem/${jobId}?token=${getToken()}`,
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      setJobs(response.data)
    })
}

export const searchJob = (setJobs, location, keyword) => {
    axios({
        method: 'POST',
        url: `${BASE_URL}postItem/search`,
        headers: {'Content-Type': 'application/json'},
        data: {
            location : location,
            keyword : keyword
        }
    }).then(response => {
        setJobs(response.data)
    })
}
