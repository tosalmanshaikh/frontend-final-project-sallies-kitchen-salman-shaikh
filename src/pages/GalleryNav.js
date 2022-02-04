import React from 'react';
import SubTitle from "../components/SubTitle/SubTitle";
import Banner from "../components/Banner/Banner";
import Gallery from "../../src/components/Gallery/Gallery"


function GalleryNav () {
    return (
        <div>

            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Look at that"/>
                    <Banner sub="our beautiful creations!"/>
                </SubTitle>
            </section>

            <SubTitle>
                <Banner title="our work speaks for itself"/>
                <Banner sub="Our fresh baked products made with love and care with the best
                possible ingredients. Enjoy!"/>

                <Gallery/>
            </SubTitle>
        </div>
    );
}

export default GalleryNav;
