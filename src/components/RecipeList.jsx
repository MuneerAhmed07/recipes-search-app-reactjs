import { useState } from "react";

const RecipeList = ({recipes}) => {

    const [visibleInstructions, setVisibleInstruction] = useState(null);

    const toggleInstructions = (index) => {
        if(visibleInstructions === index) {
            setVisibleInstruction(null);
        }else {
            setVisibleInstruction(index);
        }
    }

    return (
        <>
            <div className="recipe-list">
               {
                recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <div key={index} className='recipe-card'>
                            <h3>{recipe.title}</h3>
                            <p><strong>Ingredients: </strong>{recipe.ingredients}</p>
                            <p><strong>Servings: </strong>{recipe.servings}</p>
                            <button
                                className='toggle-instructions-button'
                                onClick={() => toggleInstructions(index)}
                            >
                                {visibleInstructions === index ? "Hide Instructions" : "Show Instruction"}
                            </button>
                            {
                                visibleInstructions === index && (
                                    <p className="instructions">
                                        <strong>Instructions: </strong> {recipe.instructions}
                                    </p>
                                )
                            }
                        </div>
                    ))
                ) : (
                    <p className="no-found">No recipe found</p>
                )
               }
            </div>
        </>
    )
}

export default RecipeList;
