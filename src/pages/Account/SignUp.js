import React, {useState} from 'react';
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import {useForm} from "react-hook-form";
import TextField from "../../components/Others/TextField/TextField";
import Button from "../../components/Others/Button/Button";
import Banner from "../../components/Others/Banner/Banner";


function SignUp() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {register, handleSubmit, formState: {errors}} = useForm();

    async function onFormSubmit(data) {
        console.log(data)

            try {
                await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup",
                    {
                        email: email,
                        username: username,
                        password: password,
                    })

                history.push('/signin')

            } catch (e) {
                console.error(e);
                console.log(e.response);
            }
        }

        return (
            <SubTitle>
                {/*<Banner title="Register"> </Banner>*/}

                <section className="searchbar-container">
                    <SubTitle>
                        <Banner title="Register here"/>
                        <Banner sub="If you don't have an account "/>
                    </SubTitle>
                </section>

                <div className="page-container">
                    <form onSubmit={handleSubmit(onFormSubmit)}>

                        <TextField
                            name="username"
                            placeholder="create a new username"
                            type="Username"
                            title="Username:  "
                            errors={errors}
                            register={register}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            validationRules={{
                                required: {
                                    value: true,
                                    message: "please enter your username",
                                },
                                minLength: {
                                    value: 6,
                                    message: "The username must contain atleast 6 characters"
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
                            name="password"
                            placeholder="password"
                            type="password"
                            title="Password:  "
                            errors={errors}
                            register={register}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            validationRules={{
                                minLength: {
                                    value: 6,
                                    message: "The password must contain atleast 6 characters"
                                }
                            }}
                        />

                        <Button
                            type="submit"
                            title="Register"
                        />

                    </form>

                </div>

                <section>
                <p>Already have an account? <Link to="/signin">Log in</Link></p>
                </section>

            </SubTitle>

        );
    }

export default SignUp;


