import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../../pages/SearchBar/Recipe";
import Alert from "../../pages/SearchBar/Alert";
import SubTitle from "../../components/SubTitle/SubTitle";
import Banner from "../../components/Banner/Banner";



function SearchBar() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

    async function getData() {
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
            setAlert("");
        } else {
            setAlert("Please fill the form");
        }
    }


    function onChange(e) {
        setQuery(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        getData();
    }


    return (

        <div className="searchbar-container">

            <section className="heading-home-page">
                <SubTitle>
                    <Banner title="Food search"/>
                    <Banner sub="Looking for inspirations?"/>
                </SubTitle>
            </section>

            <SubTitle>
            <Banner title="Search your favourite food item here!"/>

            <form onSubmit={onSubmit} className="search-form">
                {alert !== "" && <Alert alert={alert} />}
                <input
                    type="text"
                    name="query"
                    onChange={onChange}
                    value={query}
                    autoComplete="off"
                    placeholder="Search Food"
                />
                <button
                    className="form-button"
                    type="submit"
                    value="Search"
                >Search</button>
            </form>

            <div className="recipes">
                {recipes !== [] &&
                    recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
            </SubTitle>

        </div>
    );
}

export default SearchBar;
