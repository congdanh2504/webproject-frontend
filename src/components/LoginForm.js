import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { login, loginWithGG } from "../api/loginAPI";
import * as FaIcons from "react-icons/fa";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const history = useHistory();

  const changeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setLoading(true);
    await login(user, setError, history);
    setLoading(false);
  };

  const handleGG = async (param) => {
    setLoading(true);
    await loginWithGG(param.tokenId, setError, history);
    setLoading(false);
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
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={changeInput}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={changeInput}
        />
      </div>
      {error && <div class="alert alert-danger">{error}</div>}

      <div className="text-right">
        <Link className="forgot-link" to="/forgot">
          Forgot Password ?
        </Link>
      </div>
      <button
        disabled={loading}
        className="btn btn-primary btn-block btn-lg login-btn"
        onClick={submit}
      >
        {" "}
        {loading && (
          <span className="fa fa-refresh fa-spin">
            <FaIcons.FaSpinner />
          </span>
        )}
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
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className="text-center dont-have">
        Don’t have an account? <Link to="/register">Register</Link>{" "}
      </div>
    </div>
  );
}

export default LoginForm;
