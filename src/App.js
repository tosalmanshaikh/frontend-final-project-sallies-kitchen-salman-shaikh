// // working version
// //1. Routing
// //2. Log in: Log out
//
// import './App.css';
// import {Route, Switch} from "react-router-dom";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blogs from "./pages/Blogs";
// import Faq from "./pages/Faq";
// import GalleryNav from "./pages/GalleryNav";
// import Careers from "./pages/Careers";
// import SearchBar from "./pages/SearchBar/SearchBar";
// import ShoppingCart from "./pages/ShoppingCart";
// import Checkout from "./pages/Checkout";
// import Language from "./pages/Language";
//
// import {useContext} from "react";
// import {AuthContext} from "./context/AuthContextProvider";
// import Account from "./pages/Account/Account";
// import SignIn from './pages/Account/SignIn';
// import SignUp from './pages/Account/SignUp';
// import Profile from "./pages/Account/Profile";
// import {Redirect} from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
// import {StockProvider} from "./context/StockContext";
//
//
// function App() {
//
//     const { isAuth } = useContext(AuthContext)
//
//     return (
//
//       <div className="App">
//         {/*<StockProvider>*/}
//           <NavBar/>
//
//           <Route>
//               <Switch>
//
//                   <Route path="/" exact component={Home} />
//                   <Route path='/shop' exact component={Shop}/>
//                   <Route path="/about" exact component={About}/>
//                   <Route path='/blogs' exact component={Blogs} />
//                   <Route path="/contact" exact component={Contact}/>
//                   <Route path="/faq" exact component={Faq}/>
//                   <Route path="/gallery" exact component={GalleryNav}/>
//                   <Route path="/careers" exact component={Careers}/>
//                   <Route path="/search-bar" exact component={SearchBar}/>
//                   <Route path="/shopping-cart" exact component={ShoppingCart}/>
//                   <Route path="/checkout" exact component={Checkout}/>
//                   <Route path="/language" exact component={Language}/>
//                   <Route path="/account" exact component={Account}/>
//                   <Route exact path="/signin"><SignIn/></Route>
//                   <Route exact path="/signup"><SignUp/></Route>
//                   <Route path="/profile"> {isAuth ? <Profile/> : <Redirect to="/"/>}</Route>
//
//               </Switch>
//           </Route>
//           <Footer/>
//         {/*</StockProvider>*/}
//
//       </div>
//
//   );
// }
//
// export default App;
// // working version





// try out version: lets get our hands real dirty, this time! :)

//1. Routing
//2. Log in: Log out

import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Faq from "./pages/Faq";
import GalleryNav from "./pages/GalleryNav";
import Careers from "./pages/Careers";
import SearchBar from "./pages/SearchBar/SearchBar";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Language from "./pages/Language";

import {useContext} from "react";
import {AuthContext} from "./context/AuthContextProvider";
import Account from "./pages/Account/Account";
import SignIn from './pages/Account/SignIn';
import SignUp from './pages/Account/SignUp';
import Profile from "./pages/Account/Profile";
import {Redirect} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import {StockProvider} from "./context/StockContext";

import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import Payment from "./components/Payment/Payment";


function App() {

    const { isAuth } = useContext(AuthContext)

    return (


        <div className="App">
            {/*<StockProvider>*/}

            {/*fragment is like a div but it is unique!*/}
            {/*<React.Fragment>*/}

            <>
                <NavBar/>

            </>
            {/*</React.Fragment>*/}


            <Route>
                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path='/shop' exact component={Shop}/>
                    <Route path="/about" exact component={About}/>
                    <Route path='/blogs' exact component={Blogs} />
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/faq" exact component={Faq}/>
                    <Route path="/gallery" exact component={GalleryNav}/>
                    <Route path="/careers" exact component={Careers}/>
                    <Route path="/search-bar" exact component={SearchBar}/>
                    <Route path="/shopping-cart" exact component={ShoppingCart}/>

                    <Route path="/products" exact component={Products}/>
                    <Route path="/payment" exact component={Payment}/>
                    <Route path="/details/:id" exact component={Details}/>

                    <Route path="/checkout" exact component={Checkout}/>
                    <Route path="/language" exact component={Language}/>
                    <Route path="/account" exact component={Account}/>
                    <Route exact path="/signin"><SignIn/></Route>
                    <Route exact path="/signup"><SignUp/></Route>
                    <Route path="/profile"> {isAuth ? <Profile/> : <Redirect to="/"/>}</Route>

                </Switch>
            </Route>
            <Footer/>
            {/*</StockProvider>*/}

        </div>

    );
}

export default App;
