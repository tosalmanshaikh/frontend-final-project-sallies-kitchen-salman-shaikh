// partners and clients: home page
import React,{useState} from 'react'
import classes from './Parents.module.css';

import novi from '../../images/images/Partners Logo/NOVI-Hogeschool-main.png'
import uts from '../../images/images/Partners Logo/UTS.png'
import perron from '../../images/images/Partners Logo/perron.png'


function Parents() {
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

export default Parents;
