import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContextProvider";
import axios from "axios";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Button from "../../components/Others/Button/Button";
import {useForm} from "react-hook-form";
import TextField from "../../components/Others/TextField/TextField";
import Banner from "../../components/Others/Banner/Banner";


function SignIn() {

    const {login} = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {register, handleSubmit, formState: {errors}} = useForm();

    async function onFormSubmit(data) {
        console.log(data)

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',

                {
                    username: username,
                    password: password,
                })
            console.log(result.data)
            login(result.data.accessToken);

        } catch (e) {
            console.log(e);
            console.log(e.response);
        }
    }

    return (
        <>
            <SubTitle>
                <div className="searchbar-container">
                    <section>
                        <SubTitle>
                            <Banner title="Log in here"/>
                            <Banner sub="If you already have an account"/>
                        </SubTitle>
                    </section>
                </div>

                <form onSubmit={handleSubmit(onFormSubmit)}>

                    <TextField
                        name="username"
                        placeholder="your username"
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
                        name="password"
                        placeholder="your password"
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
                        title="Log in"
                    />
                </form>

                <p>Don't have an account yet? <Link to="/signup">Register</Link></p>

            </SubTitle>
        </>
    );
}

export default SignIn;
