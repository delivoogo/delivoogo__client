import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <>
            <header id="header-3" className="header navik-header header-transparent header-shadow">
                <div className="container">
                    {/* NAVIGATION MENU */}
                    <div className="navik-header-container">
                        {/* CALL BUTTON */}
                        <div className="callusbtn"><a href="tel:123456789"><i className="fas fa-phone" /></a></div>
                        {/* LOGO IMAGE */}
                        <div className="logo" data-mobile-logo={require("../../assets/images/logo-01.png")} data-sticky-logo={require("../../assets/images/logo-01.png")}>
                            <a href="demo-1.html"><img src={require("../../assets/images/logo-01.png")} alt="header-logo" /></a>
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
                                <li><a href="Components/Product-Menu/Header#">About</a>
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
                                <li><a href="Components/Product-Menu/Header#">Our Menu</a>
                                    <ul>
                                        <li><a href="menu-1.html">Menu v.1 - Tabs Cards</a></li>
                                        <li><a href="menu-2.html">Menu v.2 - Cards</a></li>
                                        <li><a href="menu-3.html">Menu v.3 - Sections</a></li>
                                    </ul>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li><a href="Components/Product-Menu/Header#">Shop</a>
                                    <ul>
                                        <li><a href="product-single.html">Single Product</a></li>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                    </ul>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li><a href="Components/Product-Menu/Header#">Blog</a>
                                    <ul>
                                        <li><a href="blog-listing.html">Blog Listing</a></li>
                                        <li><a href="single-post.html">Single Post</a></li>
                                    </ul>
                                </li>
                                {/* DROPDOWN MENU */}
                                <li><a href="Components/Product-Menu/Header#">Hours &amp; Locations</a>
                                    <ul>
                                        <li><a href="booking.html">Book A Table</a></li>
                                        <li><a href="locations.html">Our Locations</a></li>
                                        <li><a href="contacts.html">Contact Us</a></li>
                                    </ul>
                                </li>
                                {/* HEADER BUTTON  */}
                                <li className="nav-btn yellow-color"><a href="tel:123456789">789-654-3210</a></li>
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
            </header>	{/* END HEADER-3 */}
        </>
    );
}

export default Header;