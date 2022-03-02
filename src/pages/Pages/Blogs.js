/*// === Blog page  ===*/

import React from 'react';
import Banner from "../../components/Others/Banner/Banner";
import Testimony from "../../components/HomePage/Testimony/Testimony";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";

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
