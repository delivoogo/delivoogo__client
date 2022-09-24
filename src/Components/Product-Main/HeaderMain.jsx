import React from 'react';
import {Link} from "react-router-dom";


function HeaderMain() {
    return (
        <div>
            <header id="header-1" className="header navik-header header-shadow center-menu-1 header-transparent">
                <div className="container">
                    {/* NAVIGATION MENU */}
                    <div className="navik-header-container">
                        {/* CALL BUTTON */}
                        <div className="callusbtn"><a href="tel:123456789"><i className="fas fa-phone" /></a></div>
                        {/* LOGO IMAGE */}
                        <div className="logo" data-mobile-logo="images/logo-01.png" data-sticky-logo={require("../../assets/images/logo-01.png")}>
                            <a href="/"><img src={require("../../assets/images/logo-01.png")} alt="header-logo" /></a>
                        </div>
                        {/* BURGER MENU */}
                        <div className="burger-menu">
                            <div className="line-menu line-half first-line" />
                            <div className="line-menu" />
                            <div className="line-menu line-half last-line" />
                        </div>
                        {/* MAIN MENU */}
                        <nav className="navik-menu menu-caret navik-yellow">
                            <ul className="top-list">
                                {/* DROPDOWN MENU */}
                                <li><a href="#">About</a>
                                    <ul>
                                        <li><a href="about.html">About Testo</a></li>
                                        <li><a href="team.html">Meet The Team</a></li>
                                        <li><a href="gallery.html">Images Gallery</a></li>
                                        <li><a href="gift-cards.html">Gift Cards</a></li>
                                        <li><a href="faqs.html">F.A.Q.s</a></li>
                                        <li><a href="terms.html">Terms &amp; Privacy</a></li>
                                    </ul>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li><a href="#">Our Menu</a>
                                    <ul>
                                        <li><a href="menu-1.html">Menu v.1 - Tabs Cards</a></li>
                                        <li><a href="menu-2.html">Menu v.2 - Cards</a></li>
                                        <li><a href="menu-3.html">Menu v.3 - Sections</a></li>
                                    </ul>
                                </li>
                                {/* MEGA MENU */}
                                <li className="mega-menu"><a href="#">Megamenu</a>
                                    <ul>
                                        <li>
                                            {/* Mega menu container */}
                                            <div className="mega-menu-container">
                                                <div className="row">
                                                    {/* Column */}
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <a href="blog-listing.html">
                                                                            <img src={require("../../assets/images/img-05.jpg")} alt="thumbnail" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><a href="blog-listing.html">Aliquam and lobortis...</a></h4>
                                                                    <div className="mega-menu-desc">
                                                                        Donec nec faucibus lobortis viverra blandit sem justo
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <a href="blog-listing.html">
                                                                            <img src={require("../../assets/images/img-01.jpg")} alt="thumbnail" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><a href="blog-listing.html">Donec neca faucibus...</a></h4>
                                                                    <div className="mega-menu-desc">
                                                                        Aliquam ultrices ullamcoroe ultrices gravida dictum
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box last-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <a href="blog-listing.html">
                                                                            <img src={require("../../assets/images/img-07.jpg")} alt="thumbnail" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><a href="blog-listing.html">Lobortis sem mauris...</a></h4>
                                                                    <div className="mega-menu-desc">
                                                                        Integer aliquet magna neca tellus orci quis semper
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Column */}
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <a href="blog-listing.html">
                                                                            <img src={require("../../assets/images/img-08.jpg")} alt="thumbnail" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><a href="blog-listing.html">Fusce semper aliquet...</a></h4>
                                                                    <div className="mega-menu-desc">
                                                                        Laoreet tellus a consectetur bibendum dolor posuere
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <a href="blog-listing.html">
                                                                            <img src={require("../../assets/images/img-09.jpg")} alt="thumbnail" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><a href="blog-listing.html">Aliquam libero ipsum...</a></h4>
                                                                    <div className="mega-menu-desc">
                                                                        Sollicitudin ut gravida libero commodo sit malesuada
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-box last-menu-box">
                                                            <div className="mega-menu-media">
                                                                <div className="mega-menu-media-img">
                                                                    <div className="mega-menu-thumbnail">
                                                                        <a href="blog-listing.html">
                                                                            <img src={require("../../assets/images/img-10.jpg")} alt="thumbnail" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-media-info">
                                                                    <h4 className="mega-menu-heading"><a href="blog-listing.html">Posuere himenaeos...</a></h4>
                                                                    <div className="mega-menu-desc">
                                                                        Porta gravida hendrerit vitae blandit in phasellus ipsum
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Column */}
                                                    <div className="col-lg-4">
                                                        <div className="mega-menu-box last-menu-box">
                                                            <div className="mega-menu-thumbnail">
                                                                <a href="blog-listing.html">
                                                                    <img src={require("../../assets/images/img-26.jpg")} alt="thumbnail" />
                                                                </a>
                                                            </div>
                                                            <h4 className="mega-menu-heading"><a href="blog-listing.html">Etiam semper mauris...</a></h4>
                                                            <div className="mega-menu-desc">
                                                                Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero
                                                                tempus, blandit a cursus varius magna
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>	{/* END MEGA MENU */}
                            </ul>
                            <ul>
                                {/* DROPDOWN MENU */}
                                <li><a href="#">Shop</a>
                                    <ul>
                                        <li><a href="product-single.html">Single Product</a></li>
                                        <li><Link to="/cart">Shopping Cart</Link></li>
                                    </ul>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-listing.html">Blog Listing</a></li>
                                        <li><a href="single-post.html">Single Post</a></li>
                                    </ul>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li><a href="#">Contacts</a>
                                    <ul>
                                        <li><a href="booking.html">Book A Table</a></li>
                                        <li><a href="locations.html">Our Locations</a></li>
                                        <li><a href="contacts.html">Contact Us</a></li>
                                    </ul>
                                </li>
                                {/* BASKET ICON */}
                                <li className="basket-ico ico-30">
                                    <Link to="/cart">
                                        <span className="ico-holder"><span className="flaticon-shopping-bag" /> <em className="roundpoint">2</em></span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>	{/* END MAIN MENU */}
                    </div>	{/* END NAVIGATION MENU */}
                </div>     {/* End container */}
            </header>

        </div>
    );
}

export default HeaderMain;