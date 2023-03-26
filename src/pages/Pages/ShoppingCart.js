/*// === Shopping Cart page  ===*/

import React from "react";
import Banner from "../../components/Others/Banner/Banner";
import { Link } from "react-router-dom";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";

function ShoppingCart() {
  return (
    <>
      <section className="heading-home-page">
        <SubTitle>
          <Banner title="Shopping Cart" />
          <Banner sub="lets get you all stocked up!" />
        </SubTitle>
      </section>

      <section>
        <SubTitle>
          <p>
            <Link to="/products"> shop here </Link>
          </p>
        </SubTitle>
      </section>
    </>
  );
}

export default ShoppingCart;
