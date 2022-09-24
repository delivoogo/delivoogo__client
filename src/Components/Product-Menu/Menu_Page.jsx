import React from 'react';
import Header from "./Header";
import HeroMenu from "./HeroMenu";
import Menu from "./Menu";
import Pagination from "./Pagination";
import BannerCall from "./BannerCall";
import Footer from "./Footer";
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/menu.css"
import "../../assets/css/flaticon.css"
import "../../assets/js/materialize"
import "../../assets/js/jquery-3.5.1.min"
import "../../assets/js/jquery.magnific-popup.min"
import "../../assets/js/custom"

function Menu_Page() {
    return (
        <div>
            <Header/>
            <HeroMenu/>
            <Menu/>
            <Pagination/>
            <BannerCall/>
            <Footer/>
        </div>
    );
}

export default Menu_Page;