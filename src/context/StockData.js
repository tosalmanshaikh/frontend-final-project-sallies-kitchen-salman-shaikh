// === Muffins imports ===
import Muffins from '../images/ProductPhotos/BlueberryMuffin.JPG';

// === Croissants imports ===
import SpecialCroissants from '../images/ProductPhotos/RedfruitsHoneycrisps.JPG';

// === Banana bread imports ===
import BananaBread from '../images/ProductPhotos/BananaBread.JPG';

// === Corn bread imports ===
import CornBread from '../images/ProductPhotos/CornBread.jpeg';

// === Sour dough imports ===
import SourDough from '../images/ProductPhotos/SourdoughNatural.JPG'



export const StockData=[
    {
        name: "Muffin ",
        image: Muffins,
        price: 3.80,
        type: "Sponge",
        flavour: "Blueberry | Coconut | Belgium dark chocolate",
        count:1,
        id:1,
        isInCart:false

    },
    {
        name: "Special Croissants",
        image: SpecialCroissants,
        price: 3.00,
        type: "Sponge",
        flavour: "Red fruits | Honey crisps",
        count:1,
        id:2,
        isInCart:false
    },
    {
        name: "Banana Bread",
        image: BananaBread,
        price: 3.80,
        type: "Sponge",
        flavour: " Our classic | Australian Banana bread",
        count:1,
        id:3,
        isInCart:false
    },
    {
        name: "Corn Bread",
        image: CornBread,
        price: 4.50,
        type: "Sponge",
        flavour: "Corn | Onions | Cherry Tomatoes | Rosemary",
        count:1,
        id:4,
        isInCart:false
    },
    {
        name: "Sour Dough",
        image: SourDough,
        price: 8.00,
        type: "Sponge",
        flavour: "Double Ferment | 100% organic spelt ",
        count:1,
        id:5,
        isInCart:false
    },
    // {
    //     name: "Sponge Cake StrawBerry",
    //     image: SpongeCakeStrawBerry,
    //     price: 75.00,
    //     type: "Sponge",
    //     flavour: "When the strawberries are in season, we make this a lot!",
    //     count:1,
    //     id:6,
    //     isInCart:false
    // },
    // {
    //     name: "Sponge Cake",
    //     image: SpongeCake,
    //     price: 35.00,
    //     type: "Sponge",
    //     flavour: "Vanilla that we import from Madagascar makes this an elegant beauty",
    //     count:1,
    //     id:7,
    //     isInCart:false
    // },
    // {
    //     name: "Danish Butter cake",
    //     image: DanishButtercake,
    //     price: 55.00,
    //     type: "Butter Cake",
    //     flavour: "We learned this from our danish friend and oh boy its going to melt in your mouth",
    //     count:1,
    //     id:8,
    //     isInCart:false
    // },
    // {
    //     name: "Butter Cake",
    //     image: ButterCake,
    //     price: 30.00,
    //     type: "Butter Cake",
    //     flavour: "A Simple version but the organic salted butter that we import from Il de rea is our secret to this one!",
    //     count:1,
    //     id:9,
    //     isInCart:false
    // },
    // {
    //     name: "Chocolate Strawberry Cupcake",
    //     image: ChocolateCupcakeStrawBerry,
    //     price: 4.00,
    //     type: "Cupcake",
    //     flavour: "For a perfect afternoon bite with your tea",
    //     count:1,
    //     id:10,
    //     isInCart:false
    // },
    // {
    //     name: "Chocolate Cupcake",
    //     image: ChocolateCupcake,
    //     price: 3.80,
    //     type: "Cupcake",
    //     flavour: "You can never have enough of this one",
    //     count:1,
    //     id:11,
    //     isInCart:false
    // },
    // {
    //     name: "Chocolate Chip Cupcake",
    //     image: ChocolateChipCupcake,
    //     price: 3.00,
    //     type: "Cupcake",
    //     flavour: "For an explosion in your mouth, we use belgian dark chocolate chips",
    //     count:1,
    //     id:12,
    //     isInCart:false
    // },
    // {
    //     name: "Chocolate Shaving CupCake",
    //     image: ChocolateShavingCupCake,
    //     price: 4.50,
    //     type: "Cupcake",
    //     flavour: "if you havent tried yet, you are missing out!",
    //     count:1,
    //     id:13,
    //     isInCart:false
    // },
    // {
    //     name: "StrawBerry CupCake",
    //     image: StrawBerryCupCake,
    //     price: 3.20,
    //     type: "Cupcake",
    //     flavour: "We make them when the strawberries are in season, they are very popular!",
    //     count:1,
    //     id:14,
    //     isInCart:false
    // },
    // {
    //     name: "Triple Chocolate CakeCup",
    //     image: TripleChocolateCakeCup,
    //     price: 4.00,
    //     type: "Cupcake",
    //     flavour: "So you are a sucker for chocolates then this one is for you!",
    //     count:1,
    //     id:15,
    //     isInCart:false
    // },
    // {
    //     name: "Vanilla CupCake Chocolate Frosting",
    //     image: VanillaCupCakeChocolate,
    //     price: 4.30,
    //     type: "Cupcake",
    //     flavour: "A hint of the madagascar vanilla goes really well with the belgium dark chocolate",
    //     count:1,
    //     id:16,
    //     isInCart:false
    // },
    // {
    //     name: "Vanilla CupCake",
    //     image: VanillaCupCake,
    //     price: 3.25,
    //     type: "Cupcake",
    //     flavour: "Simple but some things in life are just perfectly fine that way",
    //     count:1,
    //     id:17,
    //     isInCart:false
    // },
    // {
    //     name: "Chocolate Macarons 12 pack",
    //     image: ChocolateMacarons,
    //     price: 35.00,
    //     type: "Macarons",
    //     flavour: "They fly out the door everytime we make them",
    //     count:1,
    //     id:18,
    //     isInCart:false
    // },
    // {
    //     name: "French Macarons Mix 12 pack",
    //     image: FrenchMacaronsMix,
    //     price: 40.00,
    //     type: "Macarons",
    //     flavour: "cant choose? we have mixed in flavours for you!",
    //     count:1,
    //     id:19,
    //     isInCart:false
    // },
    // {
    //     name: "French Macarons Mix 6 pack",
    //     image: FrenchMacarons,
    //     price: 25.00,
    //     type: "Macarons",
    //     flavour: "cant choose? we have mixed in flavours for you!",
    //     count:1,
    //     id:20,
    //     isInCart:false
    // },
    // {
    //     name: "Lemon Macarons 12 pack",
    //     image: LemonMacarons,
    //     price: 35.00,
    //     type: "Macarons",
    //     flavour: "Lemon makes this one very fresh and crisp",
    //     count:1,
    //     id:21,
    //     isInCart:false
    // },
    // {
    //     name: "Strawberry Macarons 12 pack",
    //     image: StrawBerryMacarons,
    //     price: 35.00,
    //     type: "Macarons",
    //     flavour: "Fresh seasonal strawberries make this one complete",
    //     count:1,
    //     id:22,
    //     isInCart:false
    // },
    // {
    //     name: "Blueberry Macarons 12 pack",
    //     image: BlueBerryMacarons,
    //     price: 35.00,
    //     type: "Macarons",
    //     flavour: "If you love blueberries",
    //     count:1,
    //     id:23,
    //     isInCart:false
    // },
    // {
    //     name: "Blueberry Donut 6 pack",
    //     image: BlueBerryDonut,
    //     price: 18.00,
    //     type: "Donut",
    //     flavour: "Our special donuts with blueberry",
    //     count:1,
    //     id:24,
    //     isInCart:false
    // },
    // {
    //     name: "Chocolate Top Donut 6 pack",
    //     image: ChocolateTopDonut,
    //     price: 18.00,
    //     type: "Donut",
    //     flavour: "If chocolate is your cup of tea",
    //     count:1,
    //     id:25,
    //     isInCart:false
    // },
    // {
    //     name: "Donut Spread 6 pack",
    //     image: DonutSpread,
    //     price: 18.00,
    //     type: "Donut",
    //     flavour: "This one is very popular too!",
    //     count:1,
    //     id:26,
    //     isInCart:false
    // },
    // {
    //     name: "Lemon Donut 6 pack",
    //     image: LemonDonut,
    //     price: 18.00,
    //     type: "Donut",
    //     flavour: "Lemon makes this one very crisp and fresh",
    //     count:1,
    //     id:27,
    //     isInCart:false
    // },
    // {
    //     name: "Strawberry Donut 6 pack",
    //     image: StrawBerryDonut,
    //     price: 18.00,
    //     type: "Donut",
    //     flavour: "We love this one!",
    //     count:1,
    //     id:28,
    //     isInCart:false
    // },
    // {
    //     name: "Nutella Donut 6 pack",
    //     image: NutellaDonut,
    //     price: 18.00,
    //     type: "Donut",
    //     flavour: "If you love nutella that this is it!",
    //     count:1,
    //     id:29,
    //     isInCart:false
    // },
    // {
    //     name: "Fudgy Brownies 6 pack",
    //     image: FudgyBrownies,
    //     price: 20.00,
    //     type: "Brownies",
    //     flavour: "This is very soft from inside, our brownies are to die for, but dont die just yet, try first!",
    //     count:1,
    //     id:30,
    //     isInCart:false
    // },
    // {
    //     name: "Brownies 6 pack",
    //     image: Brownies,
    //     price: 16.00,
    //     type: "Brownies",
    //     flavour: "Our classic, this one never gets old",
    //     count:1,
    //     id:31,
    //     isInCart:false
    // },
    // {
    //     name: "Party Cake Spread (25 pieces)",
    //     image: ShortCakeSpread,
    //     price: 50.00,
    //     type: "Spread",
    //     flavour: "Are you celebrating something than this is perfect!",
    //     count:1,
    //     id:32,
    //     isInCart:false
    // },
    // {
    //     name: "Party Cake Spread(50 pieces)",
    //     image: PartyCakeSpread,
    //     price: 90.00,
    //     type: "Spread",
    //     flavour: "Are you celebrating something than this is perfect!",
    //     count:1,
    //     id:33,
    //     isInCart:false
    // },
    // {
    //     name: "Party Cake Trio",
    //     image: PartyCakeTrio,
    //     price: 120.00,
    //     type: "Spread",
    //     flavour: "We also make special cakes to order like this one!",
    //     count:1,
    //     id:34,
    //     isInCart:false
    // },
    // {
    //     name: "Rainbow Cake",
    //     image: RainbowCake,
    //     price: 60.00,
    //     type: "Sponge",
    //     flavour: "We also make special cakes to order like this one!",
    //     count:1,
    //     id:35,
    //     isInCart:false
    // },
    // {
    //     name: "Tier Cake",
    //     image: TierCake,
    //     price: 60.00,
    //     type: "Sponge",
    //     flavour: "We also make special cakes to order like this one!",
    //     count:1,
    //     id:36,
    //     isInCart:false
    // },
]


