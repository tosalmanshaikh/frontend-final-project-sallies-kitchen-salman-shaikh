import React from 'react';
import SubTitle from "../components/SubTitle/SubTitle";
import Banner from "../components/Banner/Banner";

function ShoppingCart () {
    return (
        <section className="heading-home-page">
            <SubTitle>
                <Banner title="Shopping Cart"/>
                <Banner sub="lets get you all stocked up!"/>
            </SubTitle>
        </section>
    );
}

export default ShoppingCart;


