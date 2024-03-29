// === Footer: we have this on all the pages as standard  ===

import React from "react";
import "./Footer.css";
import Banner from "../../Others/Banner/Banner";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faYoutube,
   faGithub,
   faLinkedin,
   faFigma,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
   const today = new Date();

   return (
      <>
         <footer>
            <div className="ContainerFooter">
               <div className="Sect">
                  <Banner title="Accounts" />
                  <Link className="link-homepage" to="/signin">
                     Log in{" "}
                  </Link>{" "}
                  |
                  <Link className="link-homepage" to="/signup">
                     {" "}
                     Register{" "}
                  </Link>
               </div>

               <div className="Sect">
                  <Banner title="Address" />
                  <Banner
                     sub="Prinsestraat 47,
                            2513 CA,
                            Den Haag"
                  />
               </div>

               <div className="Sect">
                  <Banner title="Contact Detail" />
                  <Banner sub="Phone: 0687654321" />
                  <Banner sub="Email: info@sallieskitchen.nl" />

                  <div className="Icon">
                     <section className="social">
                        <a
                           className="youtube-social"
                           href="https://github.com/tosalmanshaikh/frontend-final-project-sallies-kitchen-salman-shaikh"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>

                        <a
                           className="youtube-social"
                           href="https://www.figma.com/file/D9eOnGY8WcL3ze2CR7Mjhs/Final-project?node-id=0%3A1"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon icon={faFigma} size="3x" />
                        </a>

                        <a
                           className="youtube-social"
                           href="https://www.linkedin.com/in/salman-shaikh-8a5bb8a9/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>

                        <a
                           className="youtube-social"
                           href="https://www.youtube.com/watch?v=VBlFHuCzPgY"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon icon={faYoutube} size="3x" />
                        </a>
                     </section>
                  </div>
               </div>
            </div>
         </footer>

         <div className="Bottom">
            <h6>&copy; {today.getFullYear()} : Sallie's Kitchen</h6>
         </div>
      </>
   );
}

export default Footer;
