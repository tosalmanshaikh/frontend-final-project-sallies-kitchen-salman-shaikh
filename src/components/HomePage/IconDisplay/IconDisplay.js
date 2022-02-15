import React, {useState} from 'react'
import classes from './IconDisplay.module.css'

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
            title: "Hand made"
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
            title: "Visit our store"
        },

        {
            icon: Delivery,
            title: "Delivery service"
        },

        {
            icon: Organic,
            title: "Organic products"
        },

    ])

    return (
        <div className={classes.Grid}>

            <div className={classes.IconContainer}>
                {services.map((item, index) => {
                    return (
                        <article key={index} className={classes.IconCard}>
                            <img className={classes.Icon} src={item.icon} alt=""/>
                            <h3>{item.title}</h3>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default IconDisplay;
