import React from 'react'
import StackDonuts from '../../images/images/stacked-donuts.jpg';
import ChocolateShavingCupcake from '../../images/images/chocolate-shaving-cupcake.jpg';
import ChocolateCupcake from '../../images/images/chocolate-cupcakes.jpg';
import PancakeTower from '../../images/images/pancake-tower.jpg';
import BlueBerry from '../../images/images/blueberry-.jpg';
import Macroos from '../../images/images/macroos.jpg';
import ChocolateTopCake from '../../images/images/chocolate-top-cakes.jpg';
import ShortCakes from '../../images/images/short-cakes.jpg';



function Gallery() {
    return (
        <div className="Gallery HomePageGallery">
            <figure className="Gallery__Item--1">
                <img src={StackDonuts} alt="Multi Tier cake" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--2">
                <img src={ChocolateShavingCupcake} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--3">
                <img src={ChocolateCupcake} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--4">
                <img src={PancakeTower} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--5">
                <img src={BlueBerry} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--6">
                <img src={Macroos} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--7">
                <img src={ChocolateTopCake} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--8">
                <img src={ShortCakes} alt="Stacked Donuts" className="Gallery__img"/>
            </figure>
        </div>
    )
}

export default Gallery;
