import React, {useState} from 'react'
import './IconDisplay.css';

//import icons
import Croissants from '../../../images/ServiceIcons/Croissant2.png';
import Bread from '../../../images/ServiceIcons/Bread.png';
import Muffin from '../../../images/ServiceIcons/Muffin.png';
import Baked from '../../../images/ServiceIcons/Handmade.png';
import Delivery from '../../../images/ServiceIcons/Delivery.png';
import Organic from '../../../images/ServiceIcons/OrganicProducts.png';
import Store from '../../../images/ServiceIcons/Store.png';


function IconDisplay() {
    const [services] = useState([

        {
            icon: Baked,
            title: "Homemade"
        },

        {
            icon: Croissants,
            title: "Croissants"
        },

        {
            icon: Muffin,
            title: "Muffins"
        },

        {
            icon: Bread,
            title: "Bread"
        },

        {
            icon: Store,
            title: "Visit us"
        },

        {
            icon: Delivery,
            title: "Delivery"
        },

        {
            icon: Organic,
            title: "Organic"
        },

    ])

    return (

        <div className="Grid">

            <div className="IconContainer">
                {services.map((item, index) => {
                    return (

                        <article key={index} className="IconCard">
                            <img className="IconDisplay" src={item.icon} alt=""/>
                            <h3 className="TitleIcon">{item.title}</h3>
                        </article>



                    )
                })}
            </div>
        </div>
    )
}

export default IconDisplay;

