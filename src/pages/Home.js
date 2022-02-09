import React from 'react';
import {Link} from 'react-router-dom';
import Banner from "../components/Banner/Banner";
import SubTitle from "../components/SubTitle/SubTitle";
import IconDisplay from "../components/IconDisplay/IconDisplay"
import Testimony from "../components/Testimony/Testimony";
import Parents from "../components/Parents/Parents";
import Gallery from "../components/Gallery/Gallery";



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
                    <Banner title="Our Services"/>
                    <IconDisplay/>
                </section>

                <section>
                    <Banner title="who we are"/>
                    <Banner sub="We love what we do. Life is short and you deserve a
                        treat. You in for a simple healthy bite or a guilty pleasure, we got you covered. Dont mind
                        the long cue, its worth it!"/>
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
                    <p><Link to="/signin">Log in </Link> if you already have an account <Link
                        to="/signup"> Register </Link> if you dont have an account yet
                    </p>
                </section>


                {/*<Link to="/" ><img alt="logo" src={logo}/><span className="food"></span></Link>*/}
                {/*I want to make a function so when you click on this icon you go all the way up?*/}

            </SubTitle>

        </>
    );
}

export default Home;
