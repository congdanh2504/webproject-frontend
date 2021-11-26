import axios from "axios";
import { BASE_URL, getToken, removeUserSession, setTokenSession, setUserSession } from "./Common";

export const login = async (user, setError, history) => {
    await axios({
        method: 'post',
        url: `${BASE_URL}login`,
        headers: {'Content-Type': 'application/json'},
        data: {
            email: user.email,
            password: user.password
        }
    }).then(response => {
        setTokenSession(response.data.token)
        setUserSession(response.data.user)
        history.push("/")
    }).catch(error => {
        setError(error.response.data.message)
    })
}

export const employeeRegister = async (user, error, setError, toast) => {
    await axios({
        method: 'post',
        url:  `${BASE_URL}register`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            email: user.email,
            name: user.username,
            password: user.password,
            repassword: user.rePassword,
            type: "Employee"
        }
    }).then(response => {
        toast.success("Successfully!")
    }).catch(err=> {
        toast.error("Error")
        if (err.response.status === 400) {
            setError({...error, email: err.response.data[0].email, username: err.response.data[0].name, password: err.response.data[0].password, rePassword: err.response.data[0].repassword})
        } else {
            setError({email: err.response.message})
        }
    })
}

export const employerRegister = async (user, error, setError, toast) => {
    await axios({
        method: 'post',
        url:  `${BASE_URL}register`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            email: user.email,
            name: user.username,
            password: user.password,
            repassword: user.rePassword,
            type: "Employer"
        }
    }).then(response => {
        toast.success("Successfully!")
    }).catch(err=> {
        toast.error("Error")
        if (err.response.status === 400) {
            setError({...error, email: err.response.data[0].email, username: err.response.data[0].name, password: err.response.data[0].password, rePassword: err.response.data[0].repassword})
        } else {
            setError({email: err.response.message})
        }
    })
}

export const loginWithGG = async (idToken, setError, history) => {
    await axios({
        method: 'post',
        url: `${BASE_URL}login/google`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            id_token: idToken,
        }
    }).then(response => {  
        setUserSession(response.data['user'])
        setTokenSession(response.data['token'])
        history.push('/')
    }).catch(err => {
        if (err.response.status === 401 || err.response.status === 400) {
            setError(err.response.data.message)
        }
    })
}

export const registerWithGG = (idToken, error, setError, history, type) => {
    axios({
        method: 'post',
        url: `${BASE_URL}register/google/${type}`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            id_token: idToken,
        }
    }).then(response => {
        setUserSession(response.data['user'])
        setTokenSession(response.data['token'])
        history.push('/')
    }).catch(err => {
        if (err.response.status === 401 || err.response.status === 400) {
            setError({...error, password: err.response.data.message})
        }
    })
}

export const getUser = (setAuthLoading) => {
    axios({
      method: 'get',
      url: `${BASE_URL}user?token=${getToken()}`,
      headers: {'Content-Type': 'application/json'},
    }).then(response => {
      setUserSession(response.data)
      setAuthLoading(false)
    }).catch(error => {
      removeUserSession() 
      setAuthLoading(false)
    });
}

export const getUserById = (id, setUser) => {
    axios({
        method: 'get',
        url: `${BASE_URL}user/${id}`,
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        setUser(response.data)
      })
}

