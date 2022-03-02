/*// === Stock Data  ===*/

// === Muffins imports ===
import Muffins from '../images/ProductPhotos/Muffins/ZucchiniFetaMint.jpg';

// === Croissants imports ===
import SpecialCroissants from '../images/ProductPhotos/SpecialCroissants/ChilliDarkChocolate.jpeg';

// === Banana bread imports ===
import BananaBread from '../images/ProductPhotos/BananaBread/BananaBread.JPG';

// === Sour dough imports ===
import SourDough from '../images/ProductPhotos/Bread/SourdoughNatural.JPG';

// === Cheese cake imports ===
import CheeseCake from '../images/ProductPhotos/CheeseCake/CheeseCakeRedFruits.jpeg';

// === Chai cake imports ===
import ChaiCake from '../images/ProductPhotos/ChaiCake/ChaiCake.JPG';


export const StockData = [

    {
        name: "Sour Dough",
        image: SourDough,
        price: 8.00,
        type: "Bread",
        flavour: "Double Ferment | 100% organic spelt ",
        count: 1,
        id: 1,
        isInCart: false
    },
    {
        name: "Muffin ",
        image: Muffins,
        price: 3.50,
        type: "Cake",
        flavour: "Zucchini | Feta | Mint",
        count: 1,
        id: 2,
        isInCart: false

    },
    {
        name: "Special Croissants",
        image: SpecialCroissants,
        price: 3.00,
        type: "Croissant",
        flavour: "Chilli | Belgium dark chocolate",
        count: 1,
        id: 3,
        isInCart: false
    },
    {
        name: "Banana Bread",
        image: BananaBread,
        price: 3.50,
        type: "Cake",
        flavour: " Our classic | Australian Banana bread",
        count: 1,
        id: 4,
        isInCart: false
    },
    {
        name: "Chai Cake",
        image: ChaiCake,
        price: 4.00,
        type: "Cake",
        flavour: "Homemade Chai mix | Dark Chocolate",
        count: 1,
        id: 5,
        isInCart: false
    },
    {
        name: "Cheese cake",
        image: CheeseCake,
        price: 20.00,
        type: "Cake",
        flavour: "Cheese cake | Red seasonal fruits",
        count: 1,
        id: 6,
        isInCart: false
    },
]
