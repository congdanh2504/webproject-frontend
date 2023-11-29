import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { employeeRegister, registerWithGG } from "../api/loginAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as FaIcons from "react-icons/fa";

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState({
    username: null,
    email: null,
    password: null,
    rePassword: null,
  });
  const history = useHistory();

  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setLoading(true);
    await employeeRegister(user, error, setError, toast);
    setLoading(false);
  };

  const handleGG = (param) => {
    registerWithGG(param.tokenId, error, setError, history, "Employee");
  };

  return (
    <div className="col-md-12 col-lg-6 login-right">
      <ToastContainer />
      <div className="login-header">
        <h3>
          Employee Register
          <Link to="/employer-register" className="menu-logo">
            Are you employer?
          </Link>
        </h3>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          onChange={changeInput}
        />
      </div>
      {error.username && <div class="alert alert-danger">{error.username}</div>}
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          onChange={changeInput}
        />
      </div>
      {error.email && <div class="alert alert-danger">{error.email}</div>}
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Create a Password"
          name="password"
          onChange={changeInput}
        />
      </div>
      {error.password && <div class="alert alert-danger">{error.password}</div>}
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm your Password"
          name="rePassword"
          onChange={changeInput}
        />
      </div>
      {error.rePassword && (
        <div class="alert alert-danger">{error.rePassword}</div>
      )}
      <button
        disabled={loading}
        className="btn btn-primary btn-block btn-lg login-btn"
        onClick={submit}
      >
        {loading && (
          <span className="fa fa-refresh fa-spin">
            <FaIcons.FaSpinner />
          </span>
        )}
        {"  "}
        Signup
      </button>
      <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
      </div>
      <GoogleLogin
        clientId="246456551142-bhogm2nf5tbokl5sr68rts8j7kud8o4r.apps.googleusercontent.com"
        buttonText="Register"
        onSuccess={handleGG}
        className="btn btn-google btn-block justify-content-center"
        cookiePolicy={"single_host_origin"}
      />
      <div className="text-center dont-have">
        Already have an account?{" "}
        <Link to="/login" className="menu-logo">
          Login
        </Link>{" "}
      </div>
    </div>
  );
}

export default RegisterForm;
