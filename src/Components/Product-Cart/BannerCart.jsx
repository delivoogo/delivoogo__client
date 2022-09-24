import React from 'react';

function BannerCart() {
    return (
        <div>
            <section id="banner-3" className="bg-yellow banner-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* BANNER TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="banner-3-txt coffee-color">
                                {/* Title  */}
                                <h4 className="h4-xl">Download mobile App and</h4>
                                <h2>save up to 20%</h2>
                                {/* Text */}
                                <p className="p-md">
                                    Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor
                                    primis libero tempus, blandit varius
                                </p>
                                {/* Store Badges */}
                                <div className="stores-badge">
                                    {/* AppStore */}
                                    <a href="#" className="store">
                                        <img
                                            className="appstore-original"
                                            src={require("../../assets/images/appstore.png")}
                                            alt="appstore-logo"
                                        />
                                    </a>
                                    {/* Google Play */}
                                    <a href="#" className="store">
                                        <img
                                            className="googleplay-original"
                                            src={require("../../assets/images/googleplay.png")}
                                            alt="googleplay-logo"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* BANNER IMAGE */}
                        <div className="col-md-5 col-lg-6">
                            <div className="banner-3-img">
                                <img
                                    className="img-fluid"
                                    src={require("../../assets/images/e-shop.png")}
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </section>

        </div>
    );
}

export default BannerCart;