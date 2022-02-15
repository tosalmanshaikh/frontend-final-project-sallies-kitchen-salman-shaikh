// partners and clients: home page
import React,{useState} from 'react'
import classes from './Partners.module.css';

import novi from '../../../images/PartnersLogo/Novi.png'
import uts from '../../../images/PartnersLogo/UTS.png'
import perron from '../../../images/PartnersLogo/Perron.png'


function Partners() {
    const [parents] = useState([
        novi,
        uts,
        perron

    ])

    return (
        <div className={classes.Container}>
            {parents.map((item, index) => {
                return (
                    <img className={classes.img} key={index} src={item} alt={`${item}`} />
                )
            })}
        </div>
    );
}

export default Partners;
