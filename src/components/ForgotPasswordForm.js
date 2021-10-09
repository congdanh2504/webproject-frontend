import React from 'react'

function ForgotPasswordForm() {
    return (
        <div class="col-md-12 col-lg-6 login-right">
            <div class="login-header">
                <h3>Forgot Password?</h3>
                <p class="small text-muted">Enter your email to get a password reset link</p>
            </div>
            
            <form action="https://dreamguys.co.in/demo/doccure/login.html">
                <div class="form-group form-focus">
                    <input type="email" class="form-control floating"/>
                    <label class="focus-label">Email</label>
                </div>
                <div class="text-right">
                    <a class="forgot-link" href="login.html">Remember your password?</a>
                </div>
                <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
            </form>
            
        </div>
    )
}

export default ForgotPasswordForm
