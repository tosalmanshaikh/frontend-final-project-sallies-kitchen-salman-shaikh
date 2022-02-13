import React from "react";
import { v4 as uuid } from "uuid";

function RecipeDetails  ({ ingredients })  {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuid()} className="ingredient-list">
                <ul className="ingredient-text">{ingredient.text}</ul>
            </ul>
        )
    })
}

export default RecipeDetails;
