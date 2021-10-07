import React from 'react'
import LoginBanner from "../assets/images/illustration/login-banner.svg"
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src={LoginBanner} className="img-fluid" alt="Doccure Login" />
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Employee Register
                                        <Link to='/employer-register' className="menu-logo" >
                                            Are you employer?
                                        </Link>
                                         </h3>
                                    </div>
                                    <form action="#">
                                    <div className="form-group form-focus">
                                            <input type="text" className="form-control floating" />
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <div className="form-group form-focus">
                                            <input type="password" className="form-control floating" />
                                            <label className="focus-label">Create Password</label>
                                        </div>
                                        <div className="form-group form-focus">
                                            <input type="password" className="form-control floating" />
                                            <label className="focus-label">Confirm Password</label>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
                                        <div className="login-or">
                                            <span className="or-line"></span>
                                            <span className="span-or">or</span>
                                        </div>
                                    </form>
                                    <div className="row form-row social-login">
                                        <button className="btn btn-google btn-block"><i className="fab fa-google mr-1"></i> Sign Up</button>
                                    </div>
                                    <div className="text-center dont-have">Already have an account? <Link to='/login' className="menu-logo" >Login</Link> </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Register
