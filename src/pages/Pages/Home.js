import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Banner from "../../components/Others/Banner/Banner";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import IconDisplay from "../../components/HomePage/IconDisplay/IconDisplay"
import Testimony from "../../components/HomePage/Testimony/Testimony";
import Parents from "../../components/HomePage/PartnersAndClients/Partners";
import Gallery from "../../components/HomePage/Gallery/Gallery";

function Home() {
    return (
        <>

            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Sallie's Kitchen"/>
                    <Banner sub="welcome to my home!"/>
                </SubTitle>
            </section>


            <SubTitle>
                <section>
                    <Banner title="our vision"/>
                    <Banner sub="In our bakery, we work with organic products. We try to keep our footprint as little as
                        possible. Its never a dull moment at ours as we constantly experimenting with flavours. In for a treat?"/>
                </section>


                <section>
                    <Banner title="Our Gallery"/>
                    <Banner sub="our beautiful creations"/>
                    <Gallery/>
                </section>


                <section>
                    <Banner title="who we are"/>
                    <Banner sub="We love what we do. Life is short and you deserve a
                        treat. You in for a simple healthy bite or a guilty pleasure, we got you covered. Dont mind
                        the long cue, its worth it!"/>
                </section>

                <section>
                    <Banner title="Our Services"/>
                    <IconDisplay/>
                </section>

                <section>
                    <Banner title="Our Customer Testimony"/>
                    <Testimony/>
                </section>

                <section>
                    <Banner title="Partners & Clients"/>
                    <Parents/>
                </section>

                <section>
                    <p>Do you already have an account with us or would you like to make one?</p>
                </section>

                 <Link classname="link-homepage" to="/signin">Log in </Link> |
                 <Link classname="link-homepage" to="/signup"> Register </Link>


            </SubTitle>

        </>
    );
}

export default Home;
