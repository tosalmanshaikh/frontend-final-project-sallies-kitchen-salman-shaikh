// Navigation bar: home, shop, about, contact, gallery, careers, language, search, account, cart

import React from 'react';
import {Link} from 'react-router-dom';
import cartIcon from "../../images/HomepageIcons/Cart.png";
import searchBarIcon from "../../images/HomepageIcons/Search.png";
import accountIcon from "../../images/HomepageIcons/Account.png";
import languageIcon from "../../images/HomepageIcons/Languages.png";
import './NavBar.css';

import {ProductConsumer} from "../../context/Context";
import logo from "../../images/HomepageLogo/Logo.png";
import Cart from "../Shop/Cart/Cart";


function NavBar() {
    return (

        <nav className="NavBar">

            <ProductConsumer>
                {(value) => {

                    const {cart, handleNav, handleCartNav, navOpen, closeNavCart} = value;

                    return (

                        <div className="container sticky">
                            <nav className="sticky">
                                <div className="logo-btn">

                                    <Link to="/" onClick={closeNavCart}><img className="food" alt="logo" src={logo}/></Link>

                                    <div className="cart hide" onClick={handleCartNav} > <i className="fas fa-shopping-cart"></i>
                                        <span>{cart.length}</span>
                                    </div>

                                    <div className="btn" onClick={handleNav}>
                                        <i className="fas fa-bars"></i>
                                    </div>


                                    <div className="dra">
                                        <div className="drawers">
                                            <ul className={navOpen ? "newLinks links" : "links"}
                                                onClick={closeNavCart}>

                                                <nav className="navBar">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/products">Shop</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                    <li><Link to="/faq">FAQ</Link></li>
                                                    <li><Link to="/gallery">Gallery</Link></li>
                                                    <li><Link to="/careers">Careers</Link></li>
                                                    <li><Link to="/blogs">Blogs</Link></li>
                                                </nav>

                                                    <Link to="/language">
                                                    <span className="logo-container">
                                                    <img src={languageIcon} alt="logo" className="logo"/>
                                                     </span>
                                                    </Link>

                                                    <Link to="/search-bar">
                                                    <span className="logo-container">
                                                         <img src={searchBarIcon} alt="logo" className="logo"/>
                                                    </span>
                                                    </Link>

                                                    <Link to="/account">
                                                    <span className="logo-container">
                                                        <img src={accountIcon} alt="logo" className="logo"/>
                                                    </span>
                                                    </Link>

                                                     <Link to="/shopping-cart">
                                                      <span className="logo-container">
                                                      <span className="carta" onClick={handleCartNav}><img
                                                          src={cartIcon} onClick={handleNav} alt="logo"
                                                          className="logo"/>{cart.length} </span>
                                                      </span>
                                                     </Link>

                                                {/*<button className="btn-light">light mode</button>*/}

                                            </ul>

                                            <Cart valueProps={value}/>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>
                    )
                }}
            </ProductConsumer>

        </nav>

    );
}

export default NavBar;
