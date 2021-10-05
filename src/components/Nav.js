import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo/logo.png'

function Nav() {
    return (
        <div>
            <header class="header">
            <nav class="navbar navbar-expand-lg header-nav">
                <div class="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                        <span class="bar-icon">
							<span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </a>
                    <a href="/" class="navbar-brand logo">
                        <img src={Logo} class="img-fluid" alt="Logo"/>
                    </a>
                </div>
                <div class="main-menu-wrapper">
                    <div class="menu-header">
                        <Link to='/' className="menu-logo" >
                        <img src={Logo} class="img-fluid" alt="Logo"/>
                        </Link>
                        <a id="menu_close" class="menu-close" href="javascript:void(0);">
                            <i class="fas fa-times"></i>
                        </a>
                    </div>
                    <ul class="main-nav">
                        <li>
                            <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/jobs'>Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/topCompanies'>Top Companies</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/blog'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/about'>About</NavLink>
                        </li>

                    </ul>
                </div>
                <ul class="nav header-navbar-rht">
                    <li class="nav-item contact-item">
                        <div class="header-contact-img">
                            <i class="fas fa-building"></i>
                        </div>
                        <div class="header-contact-detail">
                            <p class="contact-header">Contact</p>
                            <p class="contact-info-header"> +1 123 456 7890</p>
                        </div>
                    </li>
                    <li class="nav-item">
                        <NavLink activeClassName='active' className="nav-link header-login" to='/login'>Login/Sign up</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Nav
