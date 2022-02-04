import React,{useState} from 'react'
import classes from './IconDisplay.module.css'

//import icons
import MacaronsIcon from '../../images/images/icons/macarons.svg'
import CakeIcon from '../../images/images/icons/cake.svg';
import WeddingIcon from '../../images/images/icons/cake-1.svg';
import CupCake from '../../images/images/icons/cup-cake.svg';
import Shipping from '../../images/images/icons/shipping.svg'
import Oven from '../../images/images/icons/oven.svg';
import Bakery from '../../images/images/icons/bakery.svg';

function IconDisplay() {
    const [services] = useState([
        {
            icon: MacaronsIcon,
            title: "Marcarons"
        },
        {
            icon: CakeIcon,
            title: "Cakes"
        },
        {
            icon: WeddingIcon,
            title: "Wedding Cakes"
        },
        {
            icon: CupCake,
            title: "Cupcakes"
        },
        {
            icon: Shipping,
            title: "24 Hours Delivery"
        },
        {
            icon: Oven,
            title: "Freshly Baked"
        },
        {
            icon: Bakery,
            title: "Visit Our Store"
        },
    ])


    return (
        <div className={classes.Grid}>

            <div className={classes.IconContainer}>
                {services.map((item,index) => {
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
