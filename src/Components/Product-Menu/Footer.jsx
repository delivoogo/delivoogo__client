import React from 'react';

function Footer() {
    return (
        <div>
            <>
                <footer id="footer-4" className="footer division">
                    <div className="container grey-color">
                        {/* FOOTER CONTENT */}
                        <div className="row">
                            {/* FOOTER INFO */}
                            <div className="col-xl-3">
                                <div className="footer-info mb-40">
                                    {/* Footer Logo */}
                                    <div className="footer-logo">
                                        <img src={require("../../assets/images/logo-01.png")} alt="footer-logo" />
                                    </div>
                                    {/* Text */}
                                    <p>
                                        An orci nullam tempor a sapien eget gravida and integer donec
                                        ipsum porta justo integer
                                    </p>
                                </div>
                            </div>
                            {/* FOOTER CONTACTS */}
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="footer-contacts mb-40">
                                    {/* Title */}
                                    <h5 className="h5-sm">Order Now</h5>
                                    {/* Address */}
                                    <p>8721 M Central Avenue,</p>
                                    <p>Los Angeles, CA 90036</p>
                                    {/* Contacts */}
                                    <p className="foo-email txt-500 mt-15">
                                        <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a>
                                    </p>
                                    <p>
              <span className="yellow-color">
                <a href="tel:123456789">789-654-3210</a>
              </span>
                                    </p>
                                </div>
                            </div>
                            {/* FOOTER INFO */}
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="footer-info mb-30">
                                    {/* Title */}
                                    <h5 className="h5-sm">Working Hours</h5>
                                    {/* Text */}
                                    <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
                                    {/* Text */}
                                    <p className="mt-15">
                                        Mon-Fri: <span>9:00AM - 10:00PM</span>
                                    </p>
                                    <p>
                                        Saturday: <span>10:00AM - 8:30PM</span>
                                    </p>
                                    <p>
                                        Sunday: <span>12:00PM - 5:00PM</span>
                                    </p>
                                </div>
                            </div>
                            {/* FOOTER IMAGES */}
                            <div className="col-md-12 col-lg-4 col-xl-3">
                                <div className="footer-img mb-40">
                                    {/* Title */}
                                    <h5 className="h5-sm">Instagram Feed</h5>
                                    {/* Instagram Images */}
                                    <ul className="text-center clearfix">
                                        <li>
                                            <a href="Components/Product-Menu/Footer#" target="_blank">
                                                <img
                                                    className="insta-img"
                                                    src={require("../../assets/images/instagram/img-01.jpg")}
                                                    alt="insta-img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Components/Product-Menu/Footer#" target="_blank">
                                                <img
                                                    className="insta-img"
                                                    src={require("../../assets/images/instagram/img-02.jpg")}
                                                    alt="insta-img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Components/Product-Menu/Footer#" target="_blank">
                                                <img
                                                    className="insta-img"
                                                    src={require("../../assets/images/instagram/img-03.jpg")}
                                                    alt="insta-img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Components/Product-Menu/Footer#" target="_blank">
                                                <img
                                                    className="insta-img"
                                                    src={require("../../assets/images/instagram/img-04.jpg")}
                                                    alt="insta-img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Components/Product-Menu/Footer#" target="_blank">
                                                <img
                                                    className="insta-img"
                                                    src={require("../../assets/images/instagram/img-05.jpg")}
                                                    alt="insta-img"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Components/Product-Menu/Footer#" target="_blank">
                                                <img
                                                    className="insta-img"
                                                    src={require("../../assets/images/instagram/img-06.jpg")}
                                                    alt="insta-img"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{" "}
                            {/* END FOOTER IMAGES */}
                        </div>{" "}
                        {/* END FOOTER CONTENT */}
                        {/* BOTTOM FOOTER */}
                        <div className="bottom-footer">
                            <div className="row d-flex align-items-center">
                                {/* FOOTER COPYRIGHT */}
                                <div className="col-md-5 col-lg-6">
                                    <div className="footer-copyright">
                                        <p>© 2020 Testo. All Rights Reserved</p>
                                    </div>
                                </div>
                                {/* BOTTOM FOOTER LINKS */}
                                <div className="col-md-7 col-lg-6">
                                    <ul className="bottom-footer-list text-right clearfix">
                                        <li>
                                            <p className="first-list-link">
                                                <a href="Components/Product-Menu/Footer#">
                                                    <i className="fab fa-facebook-f" /> Facebook
                                                </a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <a href="Components/Product-Menu/Footer#">
                                                    <i className="fab fa-twitter" /> Twitter
                                                </a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <a href="Components/Product-Menu/Footer#">
                                                    <i className="fab fa-youtube" /> YouTube
                                                </a>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="last-li">
                                                <a href="Components/Product-Menu/Footer#">
                                                    <i className="fab fa-yelp" /> Yelp
                                                </a>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>{" "}
                            {/* End row */}
                        </div>{" "}
                        {/* END BOTTOM FOOTER */}
                    </div>{" "}
                    {/* End container */}
                </footer>{" "}
                {/* END FOOTER-4 */}
            </>

        </div>
    );
}

export default Footer;