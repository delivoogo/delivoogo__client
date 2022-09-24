import React from 'react';

function AboutMain() {
    return (
        <div>
            <section id="about-3" className="wide-60 about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-6">
                            <div className="about-3-img text-center mb-40">
                                <img className="img-fluid" src={require("../../assets/images/about-01-img.png")} alt="about-image" />
                            </div>
                        </div>
                        {/* ABOUT TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="about-3-txt mb-40">
                                {/* Title */}
                                <h2 className="h2-sm coffee-color">Nothing brings people together like a good burger</h2>
                                {/* Text */}
                                <p className="p-md grey-color">Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus
                                    feugiat dolor lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida
                                </p>
                                {/* Icons List */}
                                <div className="abox-2-wrapper ico-70">
                                    <div className="row text-center">
                                        {/* ABOUT BOX #1 */}
                                        <div className="col-sm-3">
                                            <div className="abox-2">
                                                {/* Icon */}
                                                <div className="abox-2-ico grey-color"><span className="flaticon-burger" /></div>
                                                {/* Text */}
                                                <h6 className="h6-lg">Burgers</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #2 */}
                                        <div className="col-sm-3">
                                            <div className="abox-2">
                                                {/* Icon */}
                                                <div className="abox-2-ico grey-color"><span className="flaticon-french-fries" /></div>
                                                {/* Text */}
                                                <h6 className="h6-lg">Fries</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #3 */}
                                        <div className="col-sm-3">
                                            <div className="abox-2">
                                                {/* Icon */}
                                                <div className="abox-2-ico grey-color"><span className="flaticon-fried-chicken" /></div>
                                                {/* Text */}
                                                <h6 className="h6-lg">Chicken</h6>
                                            </div>
                                        </div>
                                        {/* ABOUT BOX #4 */}
                                        <div className="col-sm-3">
                                            <div className="abox-2">
                                                {/* Icon */}
                                                <div className="abox-2-ico grey-color"><span className="flaticon-salad" /></div>
                                                {/* Text */}
                                                <h6 className="h6-lg">Salads</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* End Icons List */}
                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>

        </div>
    );
}

export default AboutMain;