import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as FaIcons from "react-icons/fa";
import { resetPassword } from "../api/updateProfile";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    await resetPassword(email, toast);
    setLoading(false);
  };

  return (
    <div class="col-md-12 col-lg-6 login-right">
      <ToastContainer />
      <div class="login-header">
        <h3>Forgot Password?</h3>
        <p class="small text-muted">
          Enter your email to get a password reset link
        </p>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        disabled={loading}
        onClick={submit}
        class="btn btn-primary btn-block btn-lg login-btn"
      >
        {loading && (
          <span className="fa fa-refresh fa-spin">
            <FaIcons.FaSpinner />
          </span>
        )}
        {"  "}Reset Password
      </button>
    </div>
  );
}

export default ForgotPasswordForm;
