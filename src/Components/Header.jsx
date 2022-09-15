import React from 'react';
import "../assets/css/style.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/menu.css"
function Header(props) {
    return (
        <>
            <>
                <div id="stlChanger">
                    <div className="blockChanger bgChanger">
                        <a href="#" className="chBut icon-xs">
                            <span className="flaticon-layers-1" />
                        </a>
                        <div className="chBody white-color">
                            <div
                                className="stBlock text-center"
                                style={{ margin: "30px 20px 20px 26px" }}
                            >
                                <p>Choose Demo</p>
                                <a className="s_1" href="demo-1.html">
                                    <img
                                        src={require('../assets/images/color-scheme/l-01.jpg')} alt="logo"
                                        alt="layout-image"
                                        width={180}
                                        height={93}
                                    />
                                </a>
                                <a className="s_1" href="demo-2.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-02.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={130}
                                    />
                                </a>
                                <a className="s_1" href="demo-3.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-03.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={98}
                                    />
                                </a>
                                <a className="s_1" href="demo-4.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-04.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={115}
                                    />
                                </a>
                                <a className="s_1" href="demo-5.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-05.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={118}
                                    />
                                </a>
                                <a className="s_1" href="demo-6.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-06.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={93}
                                    />
                                </a>
                                <a className="s_1" href="demo-7.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-07.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={121}
                                    />
                                </a>
                                <a className="s_1" href="demo-8.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-08.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={115}
                                    />
                                </a>
                                <a className="s_1" href="demo-9.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-09.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={109}
                                    />
                                </a>
                                <a className="s_1" href="demo-10.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-10.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={125}
                                    />
                                </a>
                                <a className="s_1" href="demo-11.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-11.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={128}
                                    />
                                </a>
                                <a className="s_1" href="demo-12.html">
                                    <img
                                        src={require("../assets/images/color-scheme/l-12.jpg")}
                                        alt="layout-image"
                                        width={180}
                                        height={123}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* END SWITCHER */}
            </>
            <header id="header-3" className="header navik-header header-transparent header-shadow">
                <div className="container">
                    {/* NAVIGATION MENU */}
                    <div className="navik-header-container">
                        {/* CALL BUTTON */}
                        <div className="callusbtn"><a href="tel:123456789"><i className="fas fa-phone" /></a></div>
                        {/* LOGO IMAGE */}
                        <div className="logo" data-mobile-logo="images/logo-01.png" data-sticky-logo="images/logo-01.png">
                            <a href="demo-1.html"><img src={require("../assets/images/logo-01.png")} alt="header-logo" /></a>
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
                                {/* DROPDOWN MENU */}
                                <li><a href="#">Shop</a>
                                    <ul>
                                        <li><a href="product-single.html">Single Product</a></li>
                                        <li><a href="cart.html">Shopping Cart</a></li>
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
                                <li><a href="#">Hours &amp; Locations</a>
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
                                    <a href="cart.html">
                                        <span className="ico-holder"><span className="flaticon-shopping-bag" /> <em className="roundpoint">2</em></span>
                                    </a>
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