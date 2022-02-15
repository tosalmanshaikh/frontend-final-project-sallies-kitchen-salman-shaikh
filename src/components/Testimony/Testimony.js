// testimony home page
import React, {useState} from 'react'
import classes from './Testimony.module.css'

import Coffee1 from '../../images/photos /coffee1.jpg';
import SpecialCroissants from '../../images/photos /SpecialCroissantsHero.JPG'
import CheesecakeRedfruits from '../../images/photos /CheeseCakeRedFruits.jpeg';


function Testimony() {

    const [Testimony] = useState([
        {
            image: CheesecakeRedfruits,
            title: "Quick Delivery",
            text: "I placed an order in the morning and it was delivered before 12:00, cant wait to order again",
            person: "Kata | Facebook"
        },
        {
            image: SpecialCroissants,
            title: "Super Pleased!",
            text: "Everything was delivered as promised. I love this place, Would highly recommend!",
            person: "Melinda | Google"
        },
        {
            image: Coffee1,
            title: "Beautiful & Tasty",
            text: "Oh boy! they really know what they are doing. I am impressed and believe me I am not so easy to please :)",
            person: "Li | Instagram"
        }
    ])

    return (
        <div className={classes.TestimonyContainer}>

            {Testimony.map((item,index) => {
                return (
                    <article className={classes.Card} key={index}>

                        <section>
                            <figure className={classes.ImageContainer}>
                              <img className={classes.CardImage} src={item.image} alt=""/>
                            </figure>
                        </section>

                        <section>
                            <h3>{item.title}</h3>
                        </section>

                        <section>
                            <p>{item.text}</p>
                        </section>

                        <h4>{item.person}</h4>
                    </article>
                )
            })}
        </div>
    )
}

export default Testimony;
