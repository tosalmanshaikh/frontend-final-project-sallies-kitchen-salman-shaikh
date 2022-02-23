import React, {useState} from 'react';
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Others/Banner/Banner";
import {useForm} from "react-hook-form";
import TextField from "../../components/Others/TextField/TextField";
import Button from "../../components/Others/Button/Button";
import ContactForm from "../../components/Others/ContactForm/ContactForm";

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [postCode, setPostCode] = useState('');

    const {register, formState: {errors}, handleSubmit} = useForm({
        mode: 'onChange',
    });

    function onFormSubmit(data) {
        console.log(data);
    }

    return (

        <div>
            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Contact us"/>
                    <Banner sub="get in touch with us!"/>
                </SubTitle>
            </section>

            <SubTitle>
                <Banner title="Fill in the form below"/>
                <Banner sub="We will get in touch with you as soon as possible"/>


                <ContactForm onSubmit={handleSubmit(onFormSubmit)}>
                    <TextField
                        name="firstname"
                        placeholder="your firstname"
                        type="text"
                        title="Firstname:  "
                        errors={errors}
                        register={register}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                message: "please enter your firstname",
                            },
                            minLength: {
                                value: 1,
                                message: "The username must contain atleast 1 characters"
                            }
                        }}
                    />

                    <TextField
                        name="lastname"
                        placeholder="your lastname"
                        type="text"
                        title="Lastname:  "
                        errors={errors}
                        register={register}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                message: "please enter your lastname",
                            },
                            minLength: {
                                value: 1,
                                message: "The username must contain atleast 1 characters"
                            }
                        }}
                    />

                    <TextField
                        name="email"
                        type="email"
                        placeholder="your email"
                        title="Email-address:  "
                        errors={errors}
                        register={register}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                message: "please enter a valid username",
                            },
                            minLength: {
                                value: 6,
                                message: "The username must contain atleast 6 characters"
                            }
                        }}
                    />

                    <TextField
                        name="phone"
                        type="text"
                        placeholder="your phone"
                        title="Phone:  "
                        errors={errors}
                        register={register}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                message: "please enter a valid phone number",
                            },
                            minLength: {
                                value: 6,
                                message: "The phone must contain atleast 1 characters"
                            }
                        }}
                    />

                    <TextField
                        name="zipcode"
                        type="text"
                        placeholder="your zipcode"
                        title="Post-code:"
                        errors={errors}
                        register={register}
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                        validationRules={{
                            required: "Postcode is verplicht",
                            pattern: {
                                value: /^[0-9]{4}[a-zA-Z]{2}$/,
                                message: "not a valid postcode"
                            }
                        }}
                    />

                    <label htmlFor="comments-field">Message:</label>
                    <textarea {...register("comments")} id="comments-field" cols="30" rows="10"></textarea>

                    <Button
                        className="form-button"
                        type="submit"
                        title="Submit your message"
                    >Submit your message</Button>

                </ContactForm>

            </SubTitle>

        </div>

    );
}

export default Contact;
