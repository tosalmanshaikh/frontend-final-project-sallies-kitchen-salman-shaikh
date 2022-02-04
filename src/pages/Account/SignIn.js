import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";
import SubTitle from "../../components/SubTitle/SubTitle";
import Button from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import TextField from "../../components/TextField/TextField";


function SignIn() {

    const {login} = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {register, handleSubmit, formState: { errors } } = useForm();

    async function onFormSubmit(data) {
        console.log(data)

        try{
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',

                {
                    username: username,
                    password: password,
                })
            console.log(result.data)
            login(result.data.accessToken);

        }catch(e){
            console.log(e);
            console.log(e.response);
        }
    }

    return (
        <>
            <SubTitle>
            <h1>Log In</h1>

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

            <p>You don't have an account yet? <Link to="/signup">Register</Link> </p>

            </SubTitle>
        </>
    );
}

export default SignIn;






//please ignore the data below

// import React, {useContext, useState} from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from "../../context/AuthContextProvider";
// import axios from "axios";
// import SubTitle from "../../components/SubTitle/SubTitle";
//
// function SignIn() {
//
//     //we import login
//     const {login} = useContext(AuthContext)
//
//     // const [email , setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//
//     //e.preventDefault prevent refreshment, we use the login that we imported!
//     async function handleSubmit(e){
//         e.preventDefault()
//
//         console.log(username, password)
//
//         try{
//             const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
//                 // const result = await axios.post('http://localhost:3000/login',
//                 {
//                     username: username,
//                     password: password,
//                 })
//             console.log(result.data)
//             login(result.data.accessToken);
//
//         }catch(e){
//             console.log(e);
//             console.log(e.response);
//         }
//     }
//
//     return (
//         <>
//             <SubTitle>
//                 <h1>Log In</h1>
//
//                 {/*//we use the handleSubmit, function we created  earlier!*/}
//                 <form className="form" onSubmit={handleSubmit}>
//                     <label htmlFor="email">
//                         Username:
//                         <input
//                             id="username"
//                             type="text"
//                             name="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </label>
//
//                     <label htmlFor="email">
//                         Password:
//                         <input
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             //e.target.value = waarde van de input
//                         />
//                     </label>
//                     <button
//                         className="form-button"
//                         type="submit">
//                         Log In
//                     </button>
//                 </form>
//
//                 <p>You dont have and account yet? <Link to="/signup">Register</Link> </p>
//
//             </SubTitle>
//         </>
//     );
// }
//
// export default SignIn;
