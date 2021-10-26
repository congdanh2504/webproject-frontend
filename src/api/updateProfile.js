import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const employeeUpdateProfile = (employee, setError, setSuccess) => {
    var formData = new FormData();
    formData.append('image', employee.avatar);
    formData.append('document', JSON.stringify({ 
        name: employee.firstName+" "+employee.lastName,
        dob: employee.dob,
        address: employee.address,
        city: employee.province,
        mobile: employee.mobile,
        cv: employee.CV
    }))
    axios({
        method: 'post',
        url: `${BASE_URL}employeeUpdateProfile?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    }).then(response => {
        setSuccess("Successfully")
    }).catch(error => {
        setError(error.response.data.message)
    })
}

export const employerUpdateProfile = (employer, setError, setSuccess) => {
    var formData = new FormData();
    formData.append('image', employer.avatar);
    formData.append('document', JSON.stringify({ 
        name: employer.name,
        address: employer.address,
        city: employer.province,
        mobile: employer.mobile,
        description: employer.description,
    }))
    axios({
        method: 'post',
        url: `${BASE_URL}employerUpdateProfile?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    }).then(response => {
        setSuccess("Successfully")
    }).catch(error => {
        setError(error.response.data.message)
    })
}