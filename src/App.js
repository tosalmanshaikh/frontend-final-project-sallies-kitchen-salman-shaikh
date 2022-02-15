//1. Routing
//2. Log in: Log out

import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Pages/Home";
import About from "./pages/Pages/About";
import Contact from "./pages/Pages/Contact";
import Blogs from "./pages/Pages/Blogs";
import Faq from "./pages/Pages/Faq";
import GalleryNav from "./pages/Pages/GalleryNav";
import Careers from "./pages/Pages/Careers";
import SearchBar from "./pages/SearchBar/SearchBar";
import ShoppingCart from "./pages/Pages/ShoppingCart";
import Checkout from "./pages/Pages/Checkout";
import Language from "./pages/Pages/Language";

import {useContext} from "react";
import {AuthContext} from "./context/AuthContextProvider";
import Account from "./pages/Account/Account";
import SignIn from './pages/Account/SignIn';
import SignUp from './pages/Account/SignUp';
import Profile from "./pages/Account/Profile";
import {Redirect} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/HomePage/Footer/Footer";

import Products from "./components/ShoppingCart/Products/Products";
import Details from "./components/ShoppingCart/Details/Details";
import Payment from "./components/ShoppingCart/Payment/Payment";


function App() {

    const { isAuth } = useContext(AuthContext)

    return (

        <div className="App">

            <NavBar/>

            <Route>
                <Switch>

                    <Route path="/" exact component={Home} />
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

        </div>

    );
}

export default App;
