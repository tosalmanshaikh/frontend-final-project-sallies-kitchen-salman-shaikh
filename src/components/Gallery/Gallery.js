import React from 'react'

import Muffins from '../../images/photos /BlueberryMuffin.JPG';
import SpecialCroissants from '../../images/photos /SpecialCroissantsHero.JPG'
import BananaBread from '../../images/photos /BananaBread.JPG';
import Coffee from '../../images/photos /coffee1.jpg';
import SourDough from '../../images/photos /SourdoughNatural.JPG'
import PecanCoffeeCake from '../../images/photos /PecanCoffeeCake.JPG'
import BrownieWalnuts from '../../images/photos /BrownieWalnuts.JPG'
import SourDoughHero from '../../images/photos /SourdoughNaturalHero.JPG'



export default function Gallery() {
    return (
        <div className="Gallery HomePageGallery">
            <figure className="Gallery__Item--1">
                <img src={Muffins} alt="Multi Tier cake" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--2">
                <img src={BananaBread} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--3">
                <img src={SourDoughHero} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--4">
                <img src={BrownieWalnuts} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--5">
                <img src={Coffee} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--6">
                <img src={PecanCoffeeCake} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--7">
                <img src={SpecialCroissants} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--8">
                <img src={SourDough} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
        </div>
    )
}
