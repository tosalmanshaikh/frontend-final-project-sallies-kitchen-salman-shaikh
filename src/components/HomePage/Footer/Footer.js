import React from 'react';
import FacebookIcon from '../../../images/SocialMedia/facebook.svg';
import TwitterIcon from '../../../images/SocialMedia/twitter.svg';
import InstagramIcon from '../../../images/SocialMedia/instagram.svg';
import PinterestIcon from '../../../images/SocialMedia/pinterest.svg';
import classes from "./Footer.module.css";

function Footer() {

    const today = new Date();

    return (
        <>
            <footer>

                <div className={classes.Container}>
                    <div className={classes.Sect}>

                        <h3>Our Address</h3>

                        <p>
                            Prinsestraat 47,
                            2513 CA,
                            Den Haag
                        </p>
                    </div>

                    <div className={classes.Sect}>
                        <h3>Contact Detail</h3>
                        <p>
                            Phone: 0687654321
                        </p>
                        <p>
                            Email: info@sallieskitchen.nl
                        </p>

                        <h3>Connect With Us</h3>
                        <div className={classes.Icon}>
                            <img src={FacebookIcon} alt="facebook icon"/>
                            <img src={TwitterIcon} alt="twitter icon"/>
                            <img src={InstagramIcon} alt="instagram icon"/>
                            <img src={PinterestIcon} alt="pinterest icon"/>
                        </div>

                    </div>

                </div>
            </footer>

            <div className={classes.Bottom}>
                <h6>&copy; {today.getFullYear()} : Sallie's Kitchen</h6>
            </div>
        </>
    )
}

export default Footer;
