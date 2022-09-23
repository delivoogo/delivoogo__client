import React from 'react';
import Preload from "./Preload";
import Header from "./Header";
import PageHero from "./PageHero";
import Menu from "./Menu";
import Pagination from "./Pagination";
import BannerCall from "./BannerCall";
import Footer from "./Footer";

function Menu_Page() {
    return (
        <div>
            <Preload/>
            <Header/>
            <PageHero/>
            <Menu/>
            <Pagination/>
            <BannerCall/>
            <Footer/>
        </div>
    );
}

export default Menu_Page;