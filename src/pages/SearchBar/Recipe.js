import React, {useState} from "react";
import RecipeDetails from "./RecipeDetails";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";

function Recipe({recipe}) {

    const [show, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;

    return (

        <div className="recipe">

            <Banner title={label}/>
            <img className="recipe-image" src={image} alt={label}/>

            <Button
                onClick={() => setShow(!show)}
                title="Ingredients"
                type="submit"
            />
            {show && <RecipeDetails ingredients={ingredients}/>}

            <a href={url} target="_blank" rel="noopener noreferrer">
                Want to know to more about this recipe?
            </a>

        </div>

    )
}


export default Recipe;
