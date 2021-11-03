import axios from "axios";
import { BASE_URL, getToken, removeUserSession, setTokenSession, setUserSession } from "./Common";

export const login = (email, password, setError, history) => {
    axios({
        method: 'post',
        url: `${BASE_URL}login`,
        headers: {'Content-Type': 'application/json'},
        data: {
            email: email,
            password: password
        }
    }).then(response => {
        setTokenSession(response.data.token)
        setUserSession(response.data.user)
        history.push("/")
    }).catch(error => {
        setError(error.response.data.message)
    })
}

export const employeeRegister = (email, username, password, repassword, setEmailError, setUsernameError, setPasswordError, setRepasswordError, history) => {
    axios({
        method: 'post',
        url:  `${BASE_URL}register`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            email: email,
            name: username,
            password: password,
            repassword: repassword,
            type: "Employee"
        }
    }).then(response => {
        history.push("/login")
    }).catch(error => {
        if (error.response.status === 409 || error.response.status === 400) {
            try {
                setEmailError(error.response.data[0].email)
                setUsernameError(error.response.data[0].name)
                setPasswordError(error.response.data[0].password)
                setRepasswordError(error.response.data[0].repassword)
            } catch ($e) {
                setEmailError("Email is already use")
            }
        }
    })
}

export const employerRegister = (email, username, password, repassword, setEmailError, setUsernameError, setPasswordError, setRepasswordError, history) => {
    axios({
        method: 'post',
        url:  `${BASE_URL}register`,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: {
            email: email,
            name: username,
            password: password,
            repassword: repassword,
            type: "Employer"
        }
    }).then(response => {
        history.push("/login")
    }).catch(error => {
        if (error.response.status === 409 || error.response.status === 400) {
            try {
                setEmailError(error.response.data[0].email)
                setUsernameError(error.response.data[0].name)
                setPasswordError(error.response.data[0].password)
                setRepasswordError(error.response.data[0].repassword)
            } catch ($e) {
                setEmailError("Email is already use")
            }
        }
    })
}

export const loginWithGG = (idToken, setError, history) => {
    axios({
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
        // window.location.reload()
    }).catch(error => {
        if (error.response.status === 401 || error.response.status === 400) {
            setError(error.response.data.message)
        }
    })
}

export const registerWithGG = (idToken, setError, history, type) => {
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
        // window.location.reload()
    }).catch(error => {
        if (error.response.status === 401 || error.response.status === 400) {
            setError(error.response.data.message)
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

