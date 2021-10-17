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