import React from 'react';
import Banner from "../../components/Others/Banner/Banner";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Testimony from "../../components/HomePage/Testimony/Testimony";

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
