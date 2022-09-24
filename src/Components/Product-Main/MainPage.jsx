import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/menu.css"
import "../../assets/css/flaticon.css"
import "../../assets/js/materialize"
import "../../assets/js/jquery-3.5.1.min"
import "../../assets/js/jquery.magnific-popup.min"
import "../../assets/js/custom"
import HeaderMain from "./HeaderMain";
import HeroMain from "./HeroMain";
import AboutMain from "./AboutMain";
import PromoMain from "./PromoMain";
import MenuMain from "./MenuMain";
import Promo2Main from "./Promo2Main";
import Menu2Main from "./Menu2Main";

function MainPage() {
    return (
        <div id="page" className="page">
            <HeaderMain/>
            <HeroMain/>
            <AboutMain/>
            <PromoMain/>
            <MenuMain/>
            <Promo2Main/>
            <Menu2Main/>
        </div>
    );
}

export default MainPage;