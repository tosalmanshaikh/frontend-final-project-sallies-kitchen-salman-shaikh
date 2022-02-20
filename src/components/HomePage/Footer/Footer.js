import React from 'react';
import FacebookIcon from '../../../images/SocialMedia/facebook.svg';
import TwitterIcon from '../../../images/SocialMedia/twitter.svg';
import InstagramIcon from '../../../images/SocialMedia/instagram.svg';
import PinterestIcon from '../../../images/SocialMedia/pinterest.svg';
import './Footer.css';

function Footer() {

    const today = new Date();

    return (
        <>
            <footer>

                <div className="ContainerFooter">
                    <div className="Sect">

                        <h3>Our Address</h3>

                        <p>
                            Prinsestraat 47,
                            2513 CA,
                            Den Haag
                        </p>
                    </div>

                    <div className="Sect">
                        <h3>Contact Detail</h3>
                        <p>
                            Phone: 0687654321
                        </p>
                        <p>
                            Email: info@sallieskitchen.nl
                        </p>

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
