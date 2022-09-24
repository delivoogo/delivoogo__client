import React from 'react';
import Header from "../Product-Menu/Header";
import Footer from "../Product-Menu/Footer";
import HeroCart from "./HeroCart";
import Cart from "./Cart";
import BannerCart from "./BannerCart";

function CartPage(props) {
    return (
        <div>
            <Header/>
            <HeroCart/>
            <Cart/>
            <BannerCart/>
            <Footer/>
        </div>
    );
}

export default CartPage;