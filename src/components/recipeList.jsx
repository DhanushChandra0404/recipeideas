import React from 'react';
import RecipeCard from './recipeCard';

function RecipeList({ recipes, loading, error }) {
  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading recipes...</p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">Error: {error}</div>;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="alert alert-info text-center" role="alert">
        No recipes found for these ingredients. Try different ones!
      </div>
    );
  }

  return (
    <div className="row">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;