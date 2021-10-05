import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo/logo.png'

function Nav() {
   
    return (
        <div>
            <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                        <span className="bar-icon">
							<span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </a>
                    <a href="/" className="navbar-brand logo">
                        <img src={Logo} className="img-fluid" alt="Logo"/>
                    </a>
                </div>
                <div className="main-menu-wrapper">
                    <div className="menu-header">
                        <Link to='/' className="menu-logo" >
                        <img src={Logo} className="img-fluid" alt="Logo"/>
                        </Link>
                        <a id="menu_close" className="menu-close" href="javascript:void(0);">
                            <i className="fas fa-times"></i>
                        </a>
                    </div>
                    <ul className="main-nav">
                        <li className="">
                            <NavLink exact activeStyle={{ color:'#09dca4'}} to='/'> <span className="active" >Home</span> </NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color:'#09dca4'}} to='/jobs'>Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color:'#09dca4'}} to='/topCompanies'>Top Companies</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color:'#09dca4'}} to='/blog'>Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ color:'#09dca4'}} to='/about'>About</NavLink>
                        </li>

                    </ul>
                </div>
                <ul className="nav header-navbar-rht">
                    <li className="nav-item contact-item">
                        <div className="header-contact-img">
                            <i className="fas fa-building"></i>
                        </div>
                        <div className="header-contact-detail">
                            <p className="contact-header">Contact</p>
                            <p className="contact-info-header"> +1 123 456 7890</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link header-login" to='/login'>Login/Sign up</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Nav
