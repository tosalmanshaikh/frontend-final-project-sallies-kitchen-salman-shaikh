import React from 'react';
import SubTitle from "../components/SubTitle/SubTitle";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import Button from "../components/Button/Button";

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

                    <ContactForm>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" />

                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Your Email" />

                        <label htmlFor="position">Your Choosen Position</label>
                        <input type="text" id="position" placeholder="Choosen Position" />

                        <label htmlFor="resume">Upload Resume</label>
                        <input type="file" id="resume" placeholder="Your resume" />

                        <label htmlFor="cover">Upload Cover Letter</label>
                        <input type="file" id="cover" placeholder="Your Cover Letter" />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="10"></textarea>

                        <Button
                            type="submit"
                            title="Submit"
                        />

                    </ContactForm>
                </div>

            </SubTitle>
        </div>


    );
}

export default Careers;




