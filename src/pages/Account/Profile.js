import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContextProvider";
import axios from "axios";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Others/Banner/Banner";


function Profile() {

    const {logout} = useContext(AuthContext);

    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext)

    useEffect(() => {

        async function fetchProfileData() {

            const token = localStorage.getItem('token');

            try {

                // const result = await axios.get ('http://localhost:3000/660/private-content',
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user',


                    {
                        headers: {

                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    })
                setProfileData(result.data)
                console.log(profileData)

            } catch (e) {
                console.error(e)
            }
        }

        fetchProfileData();
    }, [])


    return (
        <>
            <SubTitle>

                <section>
                    <Banner title="Private and Confidential Credentials"/>
                    <p><strong>Username:</strong>{user.username}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p>Personal Id:{user.id}</p>
                </section>

                <section>
                    <h3>{profileData.title}</h3>
                    <p>{profileData.content}</p>
                </section>

                <section><p><Link to="/">Home </Link>|<Link to="/products"> Shop</Link></p></section>

                <button
                    className="form-button"
                    type="button"
                    onClick={logout}
                >Logout
                </button>
            </SubTitle>
        </>
    );
}

export default Profile;
