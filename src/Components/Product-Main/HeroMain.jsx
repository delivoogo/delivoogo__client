import React from 'react';


function HeroMain() {
    return (
        <div>
            {/* HERO-1
			============================================= */}
            <section id="hero-1" className="hero-section division">
                {/* SLIDER */}
                <div className="slider">
                    <ul className="slides">
                        {/* SLIDE #1 */}
                        <li id="slide-1">
                            {/* Background Image */}
                            <img src={require("../../assets/images/slider/slide-1.jpg")} alt="slide-background" />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center center-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <div className="title"><h2>Good Time, Great Taste</h2></div>
                                                {/* Text */}
                                                <p>Open Daily: <span className="yellow-color">11:30PM - 8:30PM</span></p>
                                            </div>
                                        </div>
                                    </div>  {/* End row */}
                                </div>  {/* End container */}
                            </div>	{/* End Image Caption */}
                        </li>	{/* END SLIDE #1 */}
                        {/* SLIDE #2 */}
                        <li id="slide-2">
                            {/* Background Image */}
                            <img src={require("../../assets/images/slider/slide-2.jpg")} alt="slide-background" />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center center-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <div className="title"><h2>Discover The Real Burgers</h2></div>
                                                {/* Text */}
                                                <p>Enjoy the food you love <span className="yellow-color">FROM $6.99</span></p>
                                            </div>
                                        </div>
                                    </div>  {/* End row */}
                                </div>  {/* End container */}
                            </div>	{/* End Image Caption */}
                        </li>	{/* END SLIDE #2 */}
                        {/* SLIDE #3 */}
                        <li id="slide-3">
                            {/* Background Image */}
                            <img src={require("../../assets/images/slider/slide-3.jpg")} alt="slide-background" />
                            {/* Image Caption */}
                            <div className="caption d-flex align-items-center center-align">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="caption-txt white-color">
                                                {/* Title */}
                                                <div className="title"><h2>Big Burger, Little Money</h2></div>
                                                {/* Text */}
                                                <p>Order Now: <span className="yellow-color"><a href="tel:123456789">789-654-3210</a></span></p>
                                            </div>
                                        </div>
                                    </div>  {/* End row */}
                                </div>  {/* End container */}
                            </div>	{/* End Image Caption */}
                        </li>	{/* END SLIDE #3 */}
                    </ul>
                </div>	{/* END SLIDER */}
            </section>	{/* END HERO-1 */}

        </div>
    );
}

export default HeroMain;