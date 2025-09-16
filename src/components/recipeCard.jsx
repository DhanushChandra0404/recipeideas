import React from 'react';

function RecipeCard({ recipe }) {
  const mealId = recipe.idMeal; // TheMealDB uses idMeal for the recipe ID
  const recipeLink = `https://www.themealdb.com/meal/${mealId}`; // Link to the full recipe on TheMealDB

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={recipe.strMealThumb}
          className="card-img-top"
          alt={recipe.strMeal}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{recipe.strMeal}</h5>
          <a
            href={recipeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-auto"
          >
            View Recipe
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;