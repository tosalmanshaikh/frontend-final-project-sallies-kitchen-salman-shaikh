import React from 'react';
import SubTitle from "../../StyledComponents/SubTitle/SubTitle";
import Banner from "../../Others/Banner/Banner";
import {Link} from "react-router-dom";

function Checkout() {
    return (
        <div>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Thank you for your purchase"/>
                    <Banner sub="we are going to get this to you as soon as we can!"/>
                </SubTitle>
            </section>
            <section>
                <SubTitle>
                    <p><Link to="/"> Home </Link> | <Link
                        to="/products"> Shop </Link>
                    </p>
                </SubTitle>
            </section>
        </div>

    );
}

export default Checkout;
