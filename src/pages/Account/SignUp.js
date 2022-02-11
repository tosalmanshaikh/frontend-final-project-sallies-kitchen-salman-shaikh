import React, {useState} from 'react';
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import SubTitle from "../../components/SubTitle/SubTitle";
import {useForm} from "react-hook-form";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";


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
                <h1>Register</h1>

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
                    <p>You already have an account? Click <Link to="/signin">here</Link> to log in.</p>

                </div>
            </SubTitle>

        );
    }

export default SignUp;




//-> please ignore the data below: this is here for my own reference, Thank you!

// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import {useHistory} from "react-router-dom";
// import SubTitle from "../../components/SubTitle/SubTitle";
//
// import {useForm} from "react-hook-form";
// import TextField from "../../components/TextField/TextField";
// import Button from "../../components/Button/Button";
//
// function SignUp() {
//
//     const history = useHistory()
//     const [email, setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//
//     // const { register, handleSubmit, formState: { errors } } = useForm();
//     //
//     // async function onFormSubmit(data) {
//     //     console.log(data)
//
//     async function handleSubmit(e) {
//         e.preventDefault()
//         console.log(email, username, password)
//
//         try{
//             await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup",
//                 // await axios.post("http://localhost:3000/register",
//                 {
//                     email: email ,
//                     username: username ,
//                     password: password,
//                 })
//
//             history.push('/signin')
//
//         }catch(e){
//             console.error(e);
//             console.log(e.response);
//         }
//     }
//
//     return (
//         // <SubTitle>
//         // <div className="page-container">
//         //     <form onSubmit={handleSubmit(onFormSubmit)}>
//         //
//         //             <h1>Register</h1>
//         //             <TextField
//         //                 name="username"
//         //                 title="Gebruikersnaam:  "
//         //                 errors={errors}
//         //                 register={register}
//         //                 value={username}
//         //                 onChange={(e) => setUsername(e.target.value)}
//         //                 validationRules={{
//         //                     required: {
//         //                         minLength: 6,
//         //                         message: "De gebruikersnaam moet minimaal 6 tekens bevatten!!!"
//         //                     }
//         //                 }}
//         //             />
//         //             <TextField
//         //                 name="email"
//         //                 title="Emailadres:  "
//         //                 errors={errors}
//         //                 register={register}
//         //                 value={email}
//         //                 onChange={(e) => setEmail(e.target.value)}
//         //                 validationRules={{
//         //                     required: {
//         //                         value:true,
//         //                         message: "Emailadres moet ingevuld zijn!!!"
//         //                     }
//         //                 }}
//         //             />
//         //             <TextField
//         //                 name="password"
//         //                 title="Wachtwoord:  "
//         //                 errors={errors}
//         //                 register={register}
//         //                 value={password}
//         //                 onChange={(e) => setPassword(e.target.value)}
//         //                 validationRules={{
//         //                     minLength: {
//         //                         value: 6,
//         //                         message: "Het wachtwoord moet 6 tekens bevatten !!!!"
//         //                     }
//         //                 }}
//         //             />
//         //             <Button
//         //                 type="submit"
//         //                 title="Registreren"
//         //             />
//         //
//         //     </form>
//         //
//         // </div>
//         // </SubTitle>
//
//         <>
//             <SubTitle>
//                 <h1>Register</h1>
//
//
//                 <form className="form" onSubmit={handleSubmit}>
//                     <label htmlFor="email">
//                         Emailadress:
//                         <input
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </label>
//
//                     <label htmlFor="username">
//                         Username:
//                         <input
//                             id="username"
//                             type="text"
//                             name="username"
//                             value={username}
//                             onChange={(e) => setUsername( e.target.value)}
//                         />
//                     </label>
//
//                     <label htmlFor="password">
//                         Password:
//                         <input
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </label>
//
//                     <button
//                         className="form-button"
//                         type="submit"
//                     >
//                         Sign up
//                     </button>
//
//                 </form>
//                 <p>You already have an account? Click <Link to="/signin">here</Link> to log in.</p>
//             </SubTitle>
//         </>
//     );
// }
//
// export default SignUp;


