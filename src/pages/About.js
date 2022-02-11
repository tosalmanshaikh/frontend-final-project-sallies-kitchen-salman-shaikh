import React from 'react';
import Banner from "../components/Banner/Banner";
import SubTitle from "../components/SubTitle/SubTitle";
import Salman from '../images/images/salman/IMG_0158.PNG';
import {Link} from "react-router-dom";


function About() {
    return (

        <div>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="About Me"/>
                    <Banner sub="undefined "/>
                </SubTitle>
            </section>

            <SubTitle>
                <Banner title="salman"/>
                <Banner
                    sub="Born in India, Raised in Australia, lived in Berlin and travelled a whole lot. Food has played a very key role in my life and I would love to share my love with you "
                />

                <figure className="Gallery__Item--1">
                    <img src={Salman} alt="Salman" className="Gallery__img"/>
                </figure>

                <section>
                <Banner sub="I believe in simplicity. The best things in life are simple and it all starts with using the best
                    ingredients possible."/>
                </section>

                <section>
                    <p><Link to="/products"> Go back the products?</Link> </p>
                </section>

            </SubTitle>
        </div>

    );
}

export default About;
