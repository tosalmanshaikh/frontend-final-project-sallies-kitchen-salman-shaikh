import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContextProvider";
import axios from "axios";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";


function Profile() {

    const  {logout, isAuth} = useContext(AuthContext);

    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext)

    useEffect(() => {

        async function fetchProfileData() {

            const token = localStorage.getItem('token');

            try{

                // const result = await axios.get ('http://localhost:3000/660/private-content',
                const result = await axios.get ('https://frontend-educational-backend.herokuapp.com/api/user',


                    {headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }})
                setProfileData(result.data)
                console.log(profileData)

            }catch(e){
                console.error(e)
            }
        }

        fetchProfileData();
    },[])


    return (
        <>
            <SubTitle>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong>{user.username}</p>
                <p><strong>Email:</strong>{user.email}</p>
                <p>{user.id}</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>
                <h3>{profileData.title}</h3>
                <p>{profileData.content}</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>

            <button
                className="form-button"
                type="button"
                onClick={logout}
            >Logout</button>
            </SubTitle>
        </>
    );
}

export default Profile;
