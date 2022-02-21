import React from 'react';
import FacebookIcon from '../../../images/SocialMedia/facebook.svg';
import TwitterIcon from '../../../images/SocialMedia/twitter.svg';
import InstagramIcon from '../../../images/SocialMedia/instagram.svg';
import PinterestIcon from '../../../images/SocialMedia/pinterest.svg';
import './Footer.css';
import Banner from "../../Others/Banner/Banner";
import {Link} from "react-router-dom";

function Footer() {

    const today = new Date();

    return (
        <>
            <footer>

                <div className="ContainerFooter">
                    <div className="Sect">

                        <Banner title="Accounts"/>
                        <Link classname="link-homepage" to="/signin">Log in </Link> |
                        <Link classname="link-homepage" to="/signup"> Register </Link>
                        </div>

                    <div className="Sect">
                        <Banner title="Address"/>
                        <Banner sub=
                            "Prinsestraat 47,
                            2513 CA,
                            Den Haag"
                        />
                    </div>

                    <div className="Sect">
                        <Banner title="Contact Detail"/>
                        <Banner sub=
                            "Phone: 0687654321"
                        />
                        <Banner sub=
                            "Email: info@sallieskitchen.nl"
                        />

                        <div className="Icon">

                            <img src={FacebookIcon} alt="facebook icon"/>
                            <img src={TwitterIcon} alt="twitter icon"/>
                            <img src={InstagramIcon} alt="instagram icon"/>
                            <img src={PinterestIcon} alt="pinterest icon"/>
                        </div>

                    </div>

                </div>
            </footer>

            <div className="Bottom">
                <h6>&copy; {today.getFullYear()} : Sallie's Kitchen</h6>
            </div>
        </>
    )
}

export default Footer;
