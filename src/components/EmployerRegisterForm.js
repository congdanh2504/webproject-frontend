import React from 'react'
import { Link } from 'react-router-dom'

function EmployerRegisterForm() {
    return (
        <div className="col-md-12 col-lg-6 login-right">
            <div className="login-header">
                <h3>Employer Register
                <Link to='/register' className="menu-logo" >
                    Are you employee?
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
    )
}

export default EmployerRegisterForm
