import React from 'react';
import Banner from "../components/Banner/Banner";
import SubTitle from "../components/SubTitle/SubTitle";
import Testimony from "../components/Testimony/Testimony";

function Blogs() {
    return (

        <div>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Blogs"/>
                    <Banner sub="we love your feedbacks!"/>
                </SubTitle>
            </section>

            <SubTitle>
                <Banner title="our work speaks for itself"/>
                <Banner sub="Kind words from our valuable customers"/>

                <Testimony/>
            </SubTitle>
        </div>
    );
}

export default Blogs;
