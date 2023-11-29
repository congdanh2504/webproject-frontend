import React from "react";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="account-content">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 col-lg-6 login-left">
                  <img
                    src="assets/images/illustration/login-banner.svg"
                    className="img-fluid"
                    alt="Doccure Login"
                  />
                </div>
                <ForgotPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
