// Navigation bar: home, shop, about, contact, gallery, careers, language, search, account, cart

import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from "../../images/homepage icons /carticon.png";
import searchBarIcon from "../../images/homepage icons /search engine icon.png";
import accountIcon from "../../images/homepage icons /account icon.png";
import languageIcon from "../../images/homepage icons /languages icon.png";
// import homepageIcon from "../../images/homepage icons /home button.png";


import {ProductConsumer} from "../../context/Context";
import logo from "../../images/images/Logo/baking-2303545-1951860.png";
import Cart from "../Cart/Cart";


function NavBar() {
    return (
        <nav>

            <ProductConsumer>
                {(value)=>{

                    const {cart,handleNav,handleCartNav,navOpen,closeNavCart}=value

                    return(
                        <div className="container sticky">
                            <nav className="sticky">
                                <div className="logo-btn">

                                    <Link to="/" onClick={closeNavCart}><img alt="logo" src={logo}/><span className="food">Sallies-kitchen</span></Link>

                                    <div className="cart hide" onClick={handleCartNav }>
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>0</span>
                                    </div>

                                    <div className="btn" onClick={handleCartNav}>
                                        <i className="fas fa-bars"></i>
                                    </div>

                                    <div className="dra">
                                        <div className="drawers">
                                            <ul className={navOpen? "newLinks links" : "links"}
                                                onClick={closeNavCart}>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/products">Products</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/faq">FAQ</Link></li>
                                                <li><Link to="/gallery">Gallery</Link></li>
                                                <li><Link to="/careers">Careers</Link></li>


                                                {/*// --> Language - Not enough time :(*/}
                                                <Link to="/language">
                                                     <span className="logo-container">
                                                          <img src={languageIcon} alt="logo" className="logo"/>

                                                     </span>
                                                </Link>


                                                {/*  // --> Search Bar*/}
                                                <Link to="/search-bar">
                                                    <span className="logo-container">
                                                         <img src={searchBarIcon} alt="logo" className="logo"/>
                                                    </span>
                                                </Link>

                                                {/*// --> Account*/}
                                                <Link to="/account">
                                                    <span className="logo-container">
                                                        <img src={accountIcon} alt="logo" className="logo"/>
                                                    </span>
                                                </Link>

                                                {/*// --> Shopping Cart*/}
                                                <Link to="/shopping-cart">
                                                  <span className="logo-container">
                                                      <span className="carta" onClick={handleCartNav}><img src={cartIcon} onClick={handleNav} alt="logo" className="logo"/>{cart.length}</span>
                                                      {/*<span className="carta" onClick={handleCartNav}>Cart <img src={cartIcon} onClick={handleNav} alt="logo" className="logo"/><i className="fas fa-shopping-cart"><span>{cart.length}</span></i></span>*/}
                                                    {/*<img src={cartIcon} onClick={handleNav} alt="logo" className="logo"/>0*/}
                                                  </span>
                                                </Link>


                                            </ul>

                                            <Cart valueProps={value}/>
                                        </div>

                                        {/*<span className="carta" onClick={handleCartNav}>Cart <img src={cartIcon} onClick={handleNav} alt="logo" className="logo"/><i className="fas fa-shopping-cart"><span>{cart.length}</span></i>0</span>*/}



                                    </div>
                                </div>
                            </nav>
                        </div>
                    )
                }}
            </ProductConsumer>



            {/*// --> Home*/}
          {/*  <Link to="/">*/}
          {/*<span className="logo-container">*/}
          {/*  /!*<img src={homepageIcon} alt="logo" className="logo"/>*!/*/}
          {/*  <h3>*/}
          {/*    Home*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Shop*/}
          {/*  <Link to="/shop">*/}
          {/*<span className="logo-container">*/}
          {/*  <h3>*/}
          {/*    Shop*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> About*/}
          {/*  <Link to="/about">*/}
          {/*<span className="logo-container">*/}
          {/*    <h3>*/}
          {/*    About*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Blogs - Not enough time :(*/}
          {/*  <Link to="/blogs">*/}
          {/*<span className="logo-container">*/}
          {/*    <h3>*/}
          {/*    Blogs*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Contact*/}
          {/*  <Link to="/contact">*/}
          {/*<span className="logo-container">*/}
          {/*    <h3>*/}
          {/*    Contact*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> FAQ*/}
          {/*  <Link to="/faq">*/}
          {/*<span className="logo-container">*/}
          {/*   <h3>*/}
          {/*      FAQ*/}
          {/*   </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}


            {/*//gallery*/}
          {/*  <Link to="/gallery">*/}
          {/*<span className="logo-container">*/}
          {/*    <h3>*/}
          {/*    Gallery*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Careers*/}
          {/*  <Link to="/careers">*/}
          {/*<span className="logo-container">*/}
          {/*    <h3>*/}
          {/*    Careers*/}
          {/*  </h3>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Language - Not enough time :(*/}
          {/*  <Link to="/language">*/}
          {/*<span className="logo-container">*/}
          {/*  <img src={languageIcon} alt="logo" className="logo"/>*/}

          {/*</span>*/}
          {/*  </Link>*/}

          {/*  // --> Search Bar*/}
          {/*  <Link to="/search-bar">*/}
          {/*<span className="logo-container">*/}
          {/*  <img src={searchBarIcon} alt="logo" className="logo"/>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Account*/}
          {/*  <Link to="/account">*/}
          {/*<span className="logo-container">*/}
          {/*  <img src={accountIcon} alt="logo" className="logo"/>*/}
          {/*</span>*/}
          {/*  </Link>*/}

            {/*// --> Shopping Cart*/}
          {/*  <Link to="/shopping-cart">*/}
          {/*<span className="logo-container">*/}
          {/*    <img src={cartIcon} onClick={handleNav} alt="logo" className="logo"/>0*/}
          {/*</span>*/}
          {/*  </Link>*/}


        </nav>
    );
}

export default NavBar;
