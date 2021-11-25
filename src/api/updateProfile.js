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


export const changePassword = async (inf, toast) => {
    await axios({
        method: 'patch',
        url: `${BASE_URL}user/password?token=${getToken()}`,
        headers: {'Content-Type': 'application/json'},
        data: {
            email: inf.email,
            id: inf.id,
            oldPassword : inf.oldPassword,
            newPassword: inf.newPassword
        }
    }).then(res => {
        toast.success("Thành công")
    }).catch ( err => {
        if (err.response.status == 404)
        toast.error("Mật khẩu cũ không đúng")
        else toast.error("Mật khẩu mới phải dài hơn 8 kí tự")
    })
}

export const resetPassword = async (email, toast) => {
    await axios({
        method: 'post',
        url: `${BASE_URL}user/resetPassword`,
        headers: {'Content-Type': 'application/json'},
        data: {
            email: email
        }
    }).then(res => {
        toast.success("Successfully, please check your email")
    }).catch ( err => {
        if (err.response.status == 404)
        toast.error("Email isn't exist")
        else toast.error("Error")
    })
}
