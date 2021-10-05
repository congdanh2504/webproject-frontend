import React from 'react'
import Logo from '../assets/images/logo/logo.png'

function Footer() {
    return (
        <div>
            <footer class="footer">

                <div class="footer-top">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget footer-about">
                                    <div class="footer-logo">
                                        {/* <img src={Logo} alt="logo" /> */}
                                    </div>
                                    <div class="footer-about-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <div class="social-icon">
                                            <ul>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i class="fab fa-dribbble"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-3 col-md-6">

                                <div class="footer-widget footer-menu">
                                    <h2 class="footer-title">For someone</h2>
                                    <ul>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div class="col-lg-3 col-md-6">

                                <div class="footer-widget footer-menu">
                                    <h2 class="footer-title">For someone</h2>
                                    <ul>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i class="fas fa-angle-double-right"></i> Link</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div class="col-lg-3 col-md-6">
                                <div class="footer-widget footer-contact">
                                    <h2 class="footer-title">Contact Us</h2>
                                    <div class="footer-contact-info">
                                        <div class="footer-address">
                                            <span><i class="fas fa-map-marker-alt"></i></span>
                                            <p> 470 Tran Dai Nghia,<br/> Ngu Hanh Son, Da Nang </p>
                                        </div>
                                        <p>
                                            <i class="fas fa-phone-alt"></i> +1 123 456 7890
                                        </p>
                                        <p class="mb-0">
                                            <i class="fas fa-envelope"></i> jobhub@example.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container-fluid">

                        <div class="copyright">
                            <div class="copyright-menu">
                                <ul class="policy-menu">
                                    <li><a href="term-condition.html">Terms and Conditions</a></li>
                                    <li><a href="privacy-policy.html">Policy</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                </footer>
        </div>
    )
}

export default Footer
