import React, {useState} from "react";
import axios from "axios";
import {v4 as uuid} from "uuid";
import Recipe from "../../pages/SearchBar/Recipe";
import Alert from "../../pages/SearchBar/Alert";

import SubTitle from "../../components/StyledComponents/SubTitle/SubTitle";
import Banner from "../../components/Others/Banner/Banner";


function SearchBar() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

    async function getData() {

        //if the input field is empty, display the alert message
        if (query !== "") {
            const result = await axios.get(url);
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");           //the input form will be cleared once we submit the form: ""
            setAlert("");
        } else {
            setAlert("Please fill the form");
        }
    }


    function onChange(e) {
        setQuery(e.target.value)
    }

    function onSubmit(e) {
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

                    {alert !== "" && <Alert alert={alert}/>}
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
                    >Search
                    </button>
                </form>

                <div className="recipes">

                    {/*check if the recipe array is empty or not, if it is not empty it means we have to receive the data requested, if the first condition is true the second part will be executed!*/}
                    {/*uuid:this package will generate a unique id for each recipe in the list when we search for the food*/}

                    {recipes !== [] &&
                        recipes.map(recipe => <Recipe key={uuid()} recipe={recipe}/>)}
                </div>

            </SubTitle>

        </div>
    );
}

export default SearchBar;
