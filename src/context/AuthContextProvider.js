import jwt_decode from "jwt-decode";
import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const history = useHistory();


    function login(JWT) {
        // Ik verwacht een jwtToken als ik aangeroepen word!
        console.log(JWT)
        localStorage.setItem('token', JWT)
        console.log("gebruiker is ingelogd")

        const decode = jwt_decode(JWT)
        console.log(decode.sub)

        getUserData(decode.sub, JWT, '/profile')
    }

    //checken of er een token is -> //checken of de token nog geldig is -> // ZO JA: gegevens ophalen via een netwerk request ->// ZO NEE: dan doen we niks.
    useEffect(() => {
        // console.log('context wordt gerefresht!')

        //we maken the token again as it is outside the scope.
        const token = localStorage.getItem('token')

        if (token) {
            const decode = jwt_decode(token)
            getUserData(decode.sub, token)

        } else {
            setTimeout(() => {
                toggleIsAuth({
                    isAuth: false,
                    user: null,
                    status: 'done'
                })
            }, 1000)
        }

    }, [])

//empty dependency means it going to  rerender everytime we refresh.

    function logout() {
        localStorage.clear()
        console.log("gebruiker is uitgelogd")
        toggleIsAuth({
            ...isAuth,
            isAuth: false,
            user: null
        });
        history.push("/");
    }

    async function getUserData(id, token, redirect) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,
                // const result = await axios.get(`http://localhost:3000/600/users/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    email: result.data.email,
                    username: result.data.username,
                    id: result.data.id,
                },
                status: 'done',
            });

            history.push(redirect)

        } catch (e) {
            console.error(e)
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout
    }

    return (<AuthContext.Provider value={contextData}>
        {isAuth.status === 'done' ? children : <p className="loading-logo">Loading...</p>}
    </AuthContext.Provider>);
}

export default AuthContextProvider;
