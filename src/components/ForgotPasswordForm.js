import React from 'react'

function ForgotPasswordForm() {
    return (
        <div class="col-md-12 col-lg-6 login-right">
            <div class="login-header">
                <h3>Forgot Password?</h3>
                <p class="small text-muted">Enter your email to get a password reset link</p>
            </div>
            <div className="form-group">
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                />
            </div>
            <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
            
        </div>
    )
}

export default ForgotPasswordForm
