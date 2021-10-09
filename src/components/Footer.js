import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget footer-about">
                                    <div className="footer-about-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <div className="social-icon">
                                            <ul>
                                                <li>
                                                    <a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank"><i className="fab fa-dribbble"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6">

                                <div className="footer-widget footer-menu">
                                    <h2 className="footer-title">For someone</h2>
                                    <ul>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6">

                                <div className="footer-widget footer-menu">
                                    <h2 className="footer-title">For someone</h2>
                                    <ul>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                        <li><a href="#"><i className="fas fa-angle-double-right"></i> Link</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget footer-contact">
                                    <h2 className="footer-title">Contact Us</h2>
                                    <div className="footer-contact-info">
                                        <div className="footer-address">
                                            <span><i className="fas fa-map-marker-alt"></i></span>
                                            <p> 470 Tran Dai Nghia,<br/> Ngu Hanh Son, Da Nang </p>
                                        </div>
                                        <p>
                                            <i className="fas fa-phone-alt"></i> +1 123 456 7890
                                        </p>
                                        <p className="mb-0">
                                            <i className="fas fa-envelope"></i> jobhub@example.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container-fluid">

                        <div className="copyright">
                            <div className="copyright-menu">
                                <ul className="policy-menu">
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
