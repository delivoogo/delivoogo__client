import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/menu.css"
import "../../assets/js/menu"

function Pagination() {
    return (
        <div>
            <>
                {/* PAGE PAGINATION
			============================================= */}
                <div className="bg-color-01 page-pagination division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="Components/Product-Menu/Pagination#" tabIndex={-1}>
                                                <i className="fas fa-angle-left" />
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="Components/Product-Menu/Pagination#">
                                                1 <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="Components/Product-Menu/Pagination#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="Components/Product-Menu/Pagination#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="Components/Product-Menu/Pagination#">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="Components/Product-Menu/Pagination#">
                                                <i className="fas fa-angle-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* End container */}
                </div>{" "}
                {/* END PAGE PAGINATION */}
            </>

        </div>
    );
}

export default Pagination;