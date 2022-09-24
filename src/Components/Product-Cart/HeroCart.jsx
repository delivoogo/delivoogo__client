import React from 'react';

function HeroCart() {
    return (
        <div>
            <div id="cart-page" className="page-hero-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="hero-txt text-center white-color">
                                {/* Breadcrumb */}
                                <div id="breadcrumb">
                                    <div className="row">
                                        <div className="col">
                                            <div className="breadcrumb-nav">
                                                <nav aria-label="breadcrumb">
                                                    <ol id="fix_01" className="breadcrumb">
                                                        <li className="breadcrumb-item">
                                                            <a href="demo-1.html">Home</a>
                                                        </li>
                                                        <li
                                                            className="breadcrumb-item active"
                                                            aria-current="page"
                                                            id="fix_0"
                                                        >
                                                            Shopping Cart
                                                        </li>
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Title */}
                                <h2 className="h2-xl">Shopping Cart</h2>
                            </div>
                        </div>
                    </div>{" "}
                    {/* End row */}
                </div>{" "}
                {/* End container */}
            </div>

        </div>
    );
}

export default HeroCart;