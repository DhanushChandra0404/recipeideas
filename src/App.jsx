import React, { useState, useEffect, useCallback } from 'react';
import IngredientInput from './components/ingredientInput';
import RecipeList from './components/recipeList';


function App() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch recipes from TheMealDB API
  const fetchRecipes = useCallback(async (currentIngredients) => {
    if (!currentIngredients.trim()) {
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError(null);
    setRecipes([]); // Clear previous recipes

    try {
      const ingredientList = currentIngredients.split(',').map(item => item.trim()).join(',');
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientList}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // TheMealDB returns `meals: null` if no recipes are found
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
      setError("Failed to fetch recipes. Please try again later.");
      setRecipes([]); // Ensure recipes are empty on error
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array means this function is created once

  // Effect to trigger search when ingredients state changes (e.g., from initial load or user input)
  useEffect(() => {
    if (ingredients) { // Only fetch if ingredients are actually entered
      fetchRecipes(ingredients);
    }
  }, [ingredients, fetchRecipes]); // Re-run when ingredients or fetchRecipes changes

  const handleSearch = (inputIngredients) => {
    setIngredients(inputIngredients);
  };

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4 text-primary">Recipe Ideas</h1>
      <p className="lead text-center mb-5">
        Enter ingredients you have, and we'll find recipes for you!
      </p>
      <IngredientInput onSearch={handleSearch} />
      <RecipeList recipes={recipes} loading={loading} error={error} />
    </div>
  );
}

export default App;