/*// === Home page  ===*/

import React from 'react';
import Banner from "../../components/Others/Banner/Banner";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";

function Language() {
    return (
        <section className="heading-home-page">
            <SubTitle>
                <Banner title="Languages"/>
                <Banner sub="english | dutch"/>
            </SubTitle>
        </section>
    );
}

export default Language;
