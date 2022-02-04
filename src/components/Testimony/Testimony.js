// testimony home page
import React, {useState} from 'react'
import classes from './Testimony.module.css'
import PancakeTower from '../../images/images/pancake-tower.jpg';
import TierCake from '../../images/images/4-tier-cake.jpg';
import Macroose from '../../images/images/macroos.jpg';


function Testimony() {

    const [Testimony] = useState([
        {
            image: PancakeTower,
            title: "Quick Delivery",
            text: "I placed an order in the morning and it was delivered before 12:00, cant wait to order again",
            person: "Kata | Facebook"
        },
        {
            image: TierCake,
            title: "Super Pleased!",
            text: "Everything was delivered as promised. I love this place, Would highly recommend!",
            person: "Melinda | Google"
        },
        {
            image: Macroose,
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
                        <figure className={classes.ImageContainer}>
                            <img className={classes.CardImage} src={item.image} alt=""/>
                        </figure>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <h4>{item.person}</h4>
                    </article>
                )
            })}
        </div>
    )
}

export default Testimony;
