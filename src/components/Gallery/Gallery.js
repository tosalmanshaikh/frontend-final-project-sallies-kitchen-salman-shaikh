import React from 'react'
import BananaBread from '../../images/photos /BananaBread.JPG';
import ChilliDarkChocolate from '../../images/photos /ChilliDarkChocolate.jpeg'
import SourDoughHero from '../../images/photos /SourdoughNaturalHero.JPG';
import TomatoesAuberginePinenuts from '../../images/photos /TomatoesAuberginePinenuts.jpg';
import Coffee1 from '../../images/photos /coffee1.jpg';
import SpecialCroissants from '../../images/photos /SpecialCroissantsHero.JPG'
import Coffee2 from '../../images/photos /coffee2.jpg';
import CheesecakeRedfruits from '../../images/photos /CheeseCakeRedFruits.jpeg';


function Gallery() {
    return (
        <div className="Gallery HomePageGallery">
            <figure className="Gallery__Item--1">
                <img src={BananaBread} alt="Banana Bread" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--2">
                <img src={ChilliDarkChocolate} alt="Special Croissants" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--3">
                <img src={SourDoughHero} alt="Sourdough Bread" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--4">
                <img src={TomatoesAuberginePinenuts} alt="Savory Muffins" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--5">
                <img src={Coffee1} alt="Coffee" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--6">
                <img src={SpecialCroissants} alt="Special Croissants" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--7">
                <img src={Coffee2} alt="Coffee" className="Gallery__img"/>
            </figure>
            <figure className="Gallery__Item--8">
                <img src={CheesecakeRedfruits} alt="Cheese cake" className="Gallery__img"/>
            </figure>
        </div>
    )
}

export default Gallery;
