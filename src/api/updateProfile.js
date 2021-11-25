import axios from "axios";
import { BASE_URL, getToken } from "./Common";

export const employeeUpdateProfile = async (employee, cv, toast) => {
    var formData = new FormData();
    formData.append('image', employee.avatar);
    formData.append('document', JSON.stringify({ 
        name: employee.name,
        dob: employee.dob,
        address: employee.detail,
        city: employee.province,
        mobile: employee.mobile,
        cv: cv
    }))
    await axios({
        method: 'post',
        url: `${BASE_URL}employeeUpdateProfile?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    }).then(response => {
        toast.success("Successfully")
    }).catch(error => {
        toast.error(error.response.data.message)
    })
}

export const employerUpdateProfile = async (employer, description, toast) => {
    var formData = new FormData();
    formData.append('image', employer.avatar);
    formData.append('document', JSON.stringify({ 
        name: employer.name,
        address: employer.address,
        city: employer.province,
        mobile: employer.mobile,
        description: description,
    }))
    await axios({
        method: 'post',
        url: `${BASE_URL}employerUpdateProfile?token=${getToken()}`,
        headers: {'Content-Type': 'multipart/form-data'},
        data: formData
    }).then(response => {
        toast.success("Successfully")
    }).catch(error => {
        toast.error(error.response.data.message)
    })
}

