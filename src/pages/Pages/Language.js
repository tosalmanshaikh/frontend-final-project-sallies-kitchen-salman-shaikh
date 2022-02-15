import React from 'react';
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Others/Banner/Banner";

function Language () {
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
