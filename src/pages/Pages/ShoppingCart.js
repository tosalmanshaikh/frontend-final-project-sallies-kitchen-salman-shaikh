import React from 'react';
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Others/Banner/Banner";
import {Link} from "react-router-dom";

function ShoppingCart() {
    return (
        <>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Shopping Cart"/>
                    <Banner sub="lets get you all stocked up!"/>
                </SubTitle>
            </section>

            <SubTitle>
                <section>
                    <p><Link
                        to="/products"> shop here </Link>
                    </p>
                </section>
            </SubTitle>
        </>
    );
}

export default ShoppingCart;
