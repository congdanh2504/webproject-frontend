import React from 'react'
import { Link } from 'react-router-dom'
import LoginBanner from "../assets/images/illustration/login-banner.svg"

function Login() {
    return (
        <div class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-8 offset-md-2">

                        <div class="account-content">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-md-7 col-lg-6 login-left">
                                    <img src={LoginBanner} class="img-fluid" alt="Doccure Login" />
                                </div>
                                <div class="col-md-12 col-lg-6 login-right">
                                    <div class="login-header">
                                        <h3>Login <span>Jobhub</span></h3>
                                    </div>
                                    <form action="#">
                                        <div class="form-group form-focus">
                                            <input type="email" class="form-control floating" />
                                            <label class="focus-label">Email</label>
                                        </div>
                                        <div class="form-group form-focus">
                                            <input type="password" class="form-control floating" />
                                            <label class="focus-label">Password</label>
                                        </div>
                                        <div class="text-right">
                                            <a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                        </div>
                                        <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                        <div class="login-or">
                                            <span class="or-line"></span>
                                            <span class="span-or">or</span>
                                        </div>
                                    </form>
                                    <div class="row form-row social-login">
                                        <button class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</button>
                                    </div>
                                    <div class="text-center dont-have">Don’t have an account? <Link to="/register" >Register</Link> </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login
