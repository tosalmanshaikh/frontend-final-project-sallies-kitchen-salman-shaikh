/*// === Navigation bar: Home, Shop, About, Contact, Gallery, Careers, Language, Search, Account, Cart, Light mode   ===*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../images/HomepageIcons/Cart.png";
import searchBarIcon from "../../images/HomepageIcons/Search.png";
import accountIcon from "../../images/HomepageIcons/Account.png";
import languageIcon from "../../images/HomepageIcons/Languages.png";
import "./NavBar.css";

import { ProductConsumer } from "../../context/Context"; // ProductConsumer which as word say consumes the data from context
import logo from "../../images/HomepageLogo/Logo.png";
import Cart from "../Shop/Cart/Cart";

function NavBar() {
  // Creating state and function for fold out menu when screen size changes
  const [mobileMenu, toggleMobileMenu] = useState(false);

  function showMobileMenu() {
    toggleMobileMenu((prev) => !prev);
  }

  return (
    <nav className="navBar">
      {/*Creating the icons with display on toggle mode*/}
      <button className="toggle-menu" type="button" onClick={showMobileMenu}>
        {!mobileMenu ? (
          <span className="material-symbols-outlined">menu</span>
        ) : (
          <span className="material-symbols-outlined">close</span>
        )}
      </button>
      <ProductConsumer>
        {function (value) {
          const { cart, handleNav, handleCartNav, navOpen, closeNavCart } =
            value;

          return (
            <div className="dra">
              <div className="logo-btn">
                <Link to="/" onClick={closeNavCart}>
                  <img className="logo" alt="logo" src={logo} />
                </Link>

                <ul
                  className={navOpen ? "newLinks links" : "links"}
                  onClick={closeNavCart}
                >
                  <nav
                    className={mobileMenu ? "mobile-options" : "menu-options"}
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/products">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  </nav>

                  {/* <Link to="/language">
                                                    <span className="logo-container">
                                                    <img src={languageIcon} alt="logo" className="logo"/>
                                                     </span>
                                                </Link> */}

                  <Link to="/search-bar">
                    {/* <span className="logo-container">
                            <img
                              src={searchBarIcon}
                              alt="logo"
                              className="logo"
                            />
                          </span> */}
                    <span className="material-symbols-outlined">search</span>
                  </Link>

                  <Link to="/account">
                    {/* <span className="logo-container">
                            <img
                              src={accountIcon}
                              alt="logo"
                              className="logo"
                            />
                          </span> */}
                    <span className="material-symbols-outlined">person</span>
                  </Link>

                  <Link to="/shopping-cart">
                    {/* <span className="logo-container"> */}
                    <span className="carta" onClick={handleCartNav}>
                      <span
                        className="material-symbols-outlined"
                        onClick={handleNav}
                      >
                        shopping_cart
                      </span>

                      {cart.reduce(function (a, b) {
                        return a + b.count;
                      }, 0)}
                    </span>
                    {/* </span> */}
                  </Link>

                  {/* original  */}
                  {/* <Link to="/shopping-cart">
                          <span className="logo-container">
                            <span className="carta" onClick={handleCartNav}>
                              <img
                                src={cartIcon}
                                onClick={handleNav}
                                alt="logo"
                                className="logo"
                              />
                              {cart.reduce(function (a, b) {
                                return a + b.count;
                              }, 0)}
                            </span>
                          </span>
                        </Link> */}

                  {/*future plans*/}
                  {/*<button className="btn-light">light mode</button>*/}
                </ul>

                <Cart valueProps={value} />
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </nav>
  );
}

export default NavBar;
