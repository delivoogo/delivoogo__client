import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/jquery.datetimepicker.min.css"
import "../../assets/css/menu.css"

function HeroMenu() {

    return (
        <div>
            <>
                {/* PAGE HERO
			============================================= */}
                <div id="menu-page" className="page-hero-section division">
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
                                                                id="fix_02"
                                                            >
                                                                Menu #2
                                                            </li>
                                                        </ol>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h2 className="h2-xl">Main Menu #2</h2>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* End container */}
                </div>{" "}
                {/* END PAGE HERO */}
            </>
        </div>
    );
}

export default HeroMenu;