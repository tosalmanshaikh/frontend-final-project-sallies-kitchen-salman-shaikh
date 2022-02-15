import React from 'react';
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Banner/Banner";
import {Link} from "react-router-dom";

function Checkout(){

    return (

        <div>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Thank you for your purchase"/>
                    <Banner sub="we are going to get this to you as soon as we can!"/>
                </SubTitle>
            </section>

            <SubTitle>
            <section>
                <p><Link to="/"> home </Link> or  <Link
                    to="/products"> shop   </Link>
                </p>
            </section>
            </SubTitle>

        </div>

    );
}

export default Checkout;
