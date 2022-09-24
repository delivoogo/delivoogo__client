import React from 'react';

function PromoMain() {
    return (
        <div>
            <section id="promo-2" className="promo-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO BOX-1 */}
                        <div className="col-md-6 col-lg-5">
                            <div id="pb-2-1" className="pbox-2 bg-fixed">
                                <div className="pbox-2-txt brown-color">
                                    <h4 className="h4-lg txt-300">Get Your Free</h4>
                                    <h4 className="h4-xl">Cheese Fries</h4>
                                    <a href="menu-1.html" className="btn btn-red tra-red-hover">Learn More</a>
                                </div>
                            </div>
                        </div>
                        {/* PROMO BOX-2 */}
                        <div className="col-md-6 col-lg-7">
                            <div id="pb-2-2" className="pbox-2 bg-fixed">
                                <div className="pbox-2-txt brown-color">
                                    <h4 className="h4-lg txt-300">Crispy Chicken</h4>
                                    <h4 className="h4-xl">Burger Is Back!</h4>
                                    <a href="menu-1.html" className="btn btn-red tra-red-hover">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>

        </div>
    );
}

export default PromoMain;