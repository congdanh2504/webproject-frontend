import React, { useState,  } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../api/loginAPI";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const updateEmail = (param) => {
    setEmail(param.target.value);
  };

  const updatePassword = (param) => {
    setPassword(param.target.value);
  };

  // const setSuccess = () => {
    
  // }

  const submit = () => {
    login(email, password, setError, history)
  };

  return (
    <div className="col-md-12 col-lg-6 login-right">
      <div className="login-header">
        <h3>
          Login <span>Jobhub</span>
        </h3>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={updateEmail}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={updatePassword}
        />
      </div>
      { error && <div class="alert alert-danger">
        {error}
      </div>}
      
      <div className="text-right">
        <Link className="forgot-link" to="/forgot">
          Forgot Password ?
        </Link>
      </div>
      <button
        className="btn btn-primary btn-block btn-lg login-btn"
        onClick={submit}
      >
        Login
      </button>
      <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
      </div>
      <div className="row form-row social-login">
        <button className="btn btn-google btn-block">
          <i className="fab fa-google mr-1"></i> Login
        </button>
      </div>
      <div className="text-center dont-have">
        Don’t have an account? <Link to="/register">Register</Link>{" "}
      </div>
    </div>
  );
}

export default LoginForm;
