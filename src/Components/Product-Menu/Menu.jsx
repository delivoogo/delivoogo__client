import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/menu.css"
import "../../assets/css/flaticon.css"
import "../../assets/js/materialize"
import "../../assets/js/jquery-3.5.1.min"
import "../../assets/js/jquery.magnific-popup.min"


function Menu() {
    return (
        <div>
            <>
                {/* MENU-6
			============================================= */}
                <section id="menu-6" className="wide-70 menu-section division">
                    <div className="container">
                        <div className="row">
                            {/* MENU ITEM #1 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-11.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0850</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../../assets/images/menu/burger-11.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Crispy Chicken</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Chicken breast, chilli sauce, tomatoes, pickles, coleslaw
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$8.50</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a id="fix_03" href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #1 */}
                            {/* MENU ITEM #2 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-12.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0858</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../../assets/images/menu/burger-12.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Ultimate Bacon</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            House beef patty, cheddar cheese, bacon, onion, mustard
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$9.99</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #2 */}
                            {/* MENU ITEM #3 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-13.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0847</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-13.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Black Sheep</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            American cheese, tomato relish, avocado, lettuce, red onion
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$9.75</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #3 */}
                            {/* MENU ITEM #4 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-14.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0859</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-14.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Double Burger</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            2 beef patties, cheddar cheese, mustard, pickles, tomatoes
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$10.35</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #4 */}
                            {/* MENU ITEM #5 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-15.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0861</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-15.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Turkey Burger</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$8.95</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #5 */}
                            {/* MENU ITEM #6 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-16.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0840</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-16.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Smokey House</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Beef patty, cheddar cheese, onion, lettuce, tomatoes, pickles
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$9.50</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #6 */}
                            {/* MENU ITEM #7 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-17.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0862</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-17.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Classic Burger</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Beef, cheddar cheese, ketchup, mustard, pickles, onion
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$7.95</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #7 */}
                            {/* MENU ITEM #8 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-18.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0844</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-18.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Vegan Burger</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Mushroom patty, vegan cheese, lettuce, tomatoes, avocado
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$8.95</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #8 */}
                            {/* MENU ITEM #9 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-11.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0850</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-11.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Crispy Chicken</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Chicken breast, chilli sauce, tomatoes, pickles, coleslaw
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$8.50</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #9 */}
                            {/* MENU ITEM #10 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-13.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0847</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-13.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Black Sheep</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            American cheese, tomato relish, avocado, lettuce, red onion
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$9.75</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #10 */}
                            {/* MENU ITEM #11 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-12.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0858</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-12.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Ultimate Bacon</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            House beef patty, cheddar cheese, bacon, onion, mustard
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$9.99</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #11 */}
                            {/* MENU ITEM #12 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="menu-6-item bg-white">
                                    {/* IMAGE */}
                                    <div className="menu-6-img rel">
                                        <div className="hover-overlay">
                                            {/* Image */}
                                            <img
                                                className="img-fluid"
                                                src={require("../../assets/images/menu/burger-15.jpg")}
                                                alt="menu-image"
                                            />
                                            {/* Item Code */}
                                            <span className="item-code bg-tra-dark">Code: 0861</span>
                                            {/* Zoom Icon */}
                                            <div className="menu-img-zoom ico-25">
                                                <a
                                                    href="../src/assets/images/menu/burger-15.jpg"
                                                    className="image-link"
                                                >
                                                    <span className="flaticon-zoom" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TEXT */}
                                    <div className="menu-6-txt rel">
                                        {/* Rating */}
                                        <div className="item-rating">
                                            <div className="stars-rating stars-lg">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                        </div>
                                        {/* Like Icon */}
                                        <div className="like-ico ico-25">
                                            <a href="Components/Product-Menu/Menu#">
                                                <span className="flaticon-heart" />
                                            </a>
                                        </div>
                                        {/* Title */}
                                        <h5 className="h5-sm">Turkey Burger</h5>
                                        {/* Description */}
                                        <p className="grey-color">
                                            Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles
                                        </p>
                                        {/* Price */}
                                        <div className="menu-6-price bg-coffee">
                                            <h5 className="h5-xs yellow-color">$8.95</h5>
                                        </div>
                                        {/* Add To Cart */}
                                        <div className="add-to-cart bg-yellow ico-10">
                                            <a href="product-single.html">
                                                <span className="flaticon-shopping-bag" /> Add to Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* END MENU ITEM #12 */}
                        </div>{" "}
                        {/* End row */}
                    </div>{" "}
                    {/* End container */}
                </section>{" "}
                {/* END MENU-6 */}
            </>

        </div>
    );
}

export default Menu;