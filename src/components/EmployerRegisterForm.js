import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { employerRegister } from "../api/loginAPI";

function EmployerRegisterForm() {
  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [userNameError, setUserNameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [rePasswordError, setRePasswordError] = useState(null)
  const history = useHistory()

  const updateUsername = (param) => {
    setUsername(param.target.value)
  }

  const updateEmail = (param) => {
    setEmail(param.target.value)
  }

  const updatePassword = (param) => {
    setPassword(param.target.value)
  }

  const updateRePassword = (param) => {
    setRePassword(param.target.value)
  }

  const submit = () => {
    employerRegister(email, userName, password, rePassword, setEmailError, setUserNameError, setPasswordError, setRePasswordError, history)
  }

  return (
    <div className="col-md-12 col-lg-6 login-right">
      <div className="login-header">
        <h3>
          Employer Register
          <Link to="/register" className="menu-logo">
            Are you employee?
          </Link>
        </h3>
      </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Company name" onChange={updateUsername}/>
        </div>
        {userNameError && <div class="alert alert-danger">{userNameError}</div>}
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" onChange={updateEmail}/>
        </div>
        {emailError && <div class="alert alert-danger">{emailError}</div>}
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Create a Password"
            onChange={updatePassword}
          />
        </div>
        {passwordError && <div class="alert alert-danger">{passwordError}</div>}
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your Password"
            onChange={updateRePassword}
          />
        </div>
        {rePasswordError && <div class="alert alert-danger">{rePasswordError}</div>}
        <button
          className="btn btn-primary btn-block btn-lg login-btn"
          onClick={submit}
        >
          Signup
        </button>
        <div className="login-or">
          <span className="or-line"></span>
          <span className="span-or">or</span>
        </div>
      <div className="row form-row social-login">
        <button className="btn btn-google btn-block">
          <i className="fab fa-google mr-1"></i> Sign Up
        </button>
      </div>
      <div className="text-center dont-have">
        Already have an account?{" "}
        <Link to="/login" className="menu-logo">
          Login
        </Link>{" "}
      </div>
    </div>
  );
}

export default EmployerRegisterForm;
