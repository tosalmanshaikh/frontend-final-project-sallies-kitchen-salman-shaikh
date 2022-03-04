/*// === Testimony - Homepage  ===*/

import React, {useState} from 'react'
import './Testimony.css';

/*// === Import photos  ===*/
import Coffee1 from '../../../images/ProductPhotos/Coffee/coffee1.jpg';
import SpecialCroissants from '../../../images/ProductPhotos/SpecialCroissants/SpecialCroissantsHero.JPG'
import CheesecakeRedfruits from '../../../images/ProductPhotos/CheeseCake/CheeseCakeRedFruits.jpeg';

function Testimony() {

    const [Testimony] = useState([
        {
            image: CheesecakeRedfruits,
            title: "Quick Delivery",
            text: "I placed an order in the morning and it was delivered before 12:00, cant wait to order again",
            person: "Siebe | Facebook"
        },
        {
            image: SpecialCroissants,
            title: "Super Pleased!",
            text: "Everything was delivered as promised. I love this place, Would highly recommend!",
            person: "Zoe | Google"
        },
        {
            image: Coffee1,
            title: "Beautiful & Tasty",
            text: "Oh boy! they really know what they are doing. I am impressed and believe me I am not so easy to please :)",
            person: "Ryan | Instagram"
        }
    ])

    return (
        <div className="TestimonyContainer">

            {Testimony.map((item, index) => {
                return (
                    <article className="Card" key={index}>

                        <section>
                            <figure className="ImageContainer">
                                <img className="CardImage" src={item.image} alt={item.image}/>
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
