import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext} from "../../context/AuthContextProvider";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Banner/Banner";

function Account() {

    //we import logout, isAuth as we need them!
    const  {logout, isAuth} = useContext(AuthContext);
    const history = useHistory();

    return (
        <>

            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Account"/>
                    <Banner sub="do you already have an account with us?"/>
                </SubTitle>
            </section>
            <p> Click here to log in, log out or register!</p>


            {/*//if authenticated that just show the logout button*/}
            <section className="log-in-out-buttons">

            {isAuth ?
                <button
                    type="button"
                    onClick={logout}
                >Logout</button>

                :

                // otherwise, show us the Log in, Register button!

                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        Log in
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Register
                    </button>
                </div>

            }

            </section>

        </>
    );
}

export default Account;

