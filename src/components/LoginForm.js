import React, { useState,  } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { login, loginWithGG } from "../api/loginAPI";
import * as FaIcons from 'react-icons/fa'

function LoginForm() {
  const [loading, setLoading] = useState(false)
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

  const submit = async () => {
    setLoading(true)
    await login(email, password, setError, history)
    setLoading(false)
  };

  const handleGG = (param) => {
    loginWithGG(param.tokenId, setError, history)
  }

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
      <button disable={loading}
        className="btn btn-primary btn-block btn-lg login-btn"
        onClick={submit}
      > {loading && <span className="fa fa-refresh fa-spin"><FaIcons.FaSpinner/></span>}
       {"  "}
        Login
      </button>
      <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
      </div>
      <div className="row form-row social-login">
        <GoogleLogin 
          clientId="246456551142-222jord9ruqrqlafkbnm7212euatdihl.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={handleGG}
          className="btn btn-google btn-block justify-content-center"
          cookiePolicy={'single_host_origin'}/>
      </div>
      <div className="text-center dont-have">
        Don’t have an account? <Link to="/register">Register</Link>{" "}
      </div>
    </div>
  );
}

export default LoginForm;
