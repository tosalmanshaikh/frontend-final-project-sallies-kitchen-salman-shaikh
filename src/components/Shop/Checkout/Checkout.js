/*// === Checkout  ===*/

import React from 'react';
import Banner from "../../Others/Banner/Banner";
import {Link} from "react-router-dom";
import SubTitle from "../../StyledComponents/SubTitle/SubTitle";

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
