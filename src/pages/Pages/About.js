/*// === About page  ===*/

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Others/Banner/Banner";
import Salman from "../../images/AboutSalman/Salman.PNG";
import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";

function About() {
  return (
    <div>
      <section className="heading-home-page">
        <SubTitle>
          <Banner title="About Me" />
          <Banner sub="undefined " />
        </SubTitle>
      </section>

      <SubTitle>
        <Banner title="salman" />
        <Banner sub="Born in India, Raised in Australia, lived in Berlin and travelled a whole lot. Food has played a very key role in my life and I would love to share my love with you " />

        <figure className="Gallery__Item--1_salman">
          <img src={Salman} alt="Salman" className="Gallery__img_salman" />
        </figure>

        <section>
          <Banner
            sub="I believe in simplicity. The best things in life are simple and it all starts with using the best
                    ingredients possible."
          />
        </section>

        <section>
          <Banner title="Lets get you all stocked up" />
          <p>
            <Link to="/products"> Shop here</Link>
          </p>
        </section>
      </SubTitle>
    </div>
  );
}

export default About;
