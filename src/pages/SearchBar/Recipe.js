import React, {useState} from "react";
import RecipeDetails from "./RecipeDetails";
import Banner from "../../components/Others/Banner/Banner";
import Button from "../../components/Others/Button/Button";
import './Recipe.css';


function Recipe({recipe}) {

    const [show, setShow] = useState(false);
    const {label, image, url, ingredients} = recipe.recipe;

    return (


        <div className="recipe">

            <Banner title={label}/>
            <img className="recipeImage" src={image} alt={label}/>

            <section>
            <Button
                onClick={() => setShow(!show)}
                title="Ingredients"
                type="submit"
            />

            {show && <RecipeDetails ingredients={ingredients}/>}
            </section>

            <section>
            <a href={url} target="_blank" rel="noopener noreferrer">
                more about this recipe?
            </a>
            </section>

        </div>


    )
}


export default Recipe;
