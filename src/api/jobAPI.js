import axios from "axios";
import { BASE_URL, getToken } from "./Common";



export const postJob =  async (job, toast) => {
    var formData = new FormData();
    formData.append('image', job.image);
    formData.append('document', JSON.stringify({
        title: job.title,
        nameJob: job.nameJob,
        description: job.description,
        category: job.category,
        salary: job.salary,
        duration: job.duration,
        province: job.province,
        detailedAddress: `${job.street}, ${job.ward}, ${job.district}, ${job.province}`,
    }))
    await axios({
        method: 'post',
        url: `${BASE_URL}postItem?token=${getToken()}`,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: formData
    })
    .then((response) => {
        toast.success("Successfully")
    })
    .catch((error) => {
        toast.error("Error")
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

export const addReview = async (id, title, message, rate, setJob, idJob) => {
    await axios({
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

export const deleteJob = async (jobId, toast) =>{
    await axios({
      method: 'DELETE',
      url: `${BASE_URL}postItem/${jobId}?token=${getToken()}`,
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      toast.success("Successfully")
    }).catch((err) => {
        toast.error("Error")
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

export const updateJob = async (job, toast) => {
    await axios({
        method: 'PATCH',
        url: `${BASE_URL}postItem?token=${getToken()}`,
        headers: {'Content-Type': 'application/json'},
        data: {
            id: job.id,
            title: job.title,
            nameJob: job.nameJob,
            description: job.description,
            category: job.category,
            salary: job.salary,
            duration: job.duration,
            address: {
                province: job.province,
                detail: job.detail
            } 
        }
    }).then((res) => {
        toast.success("Successfully")
    }).catch((err) => {
        toast.error("Error")
    })
}

export const addApply = (postItemID, employeeID, toast) => {
    axios({
        method: 'POST',
        url: `${BASE_URL}apply?token=${getToken()}`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            postItemID : postItemID,
            employeeID : employeeID,
        }
    }).then((res) => {
        toast.success("Successfully")
    }).catch((err) => {
        toast.error("Error")
    })
}

export const response = async (index, id, isApprove, toast) => {
    await axios({
        method: 'POST',
        url: `${BASE_URL}apply/response?token=${getToken()}`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            index: index,
            id : id,
            isApprove : isApprove,
        }
    }).then((res) => {
        toast.success("Successfully")
    }).catch((err) => {
        toast.error("Error")
    })
}
