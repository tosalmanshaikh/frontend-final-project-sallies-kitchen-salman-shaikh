import React from 'react';
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Others/Banner/Banner";
import ContactForm from "../../components/Others/ContactForm/ContactForm";


function Careers () {
    return (

        <div>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Looking for a job?"/>
                    <Banner sub="apply below!"/>
                </SubTitle>
            </section>

            <SubTitle>

                <Banner title="Current open positions"/>
                <Banner sub="Bakery manager: Are you just crazy about baking as we are and you know the drill, then we are looking for you - Full time"/>


                <div className="Container">
                    <SubTitle>
                        <h2>Submit Application Form</h2>
                    </SubTitle>

                    <ContactForm/>

                </div>

            </SubTitle>
        </div>


    );
}

export default Careers;




