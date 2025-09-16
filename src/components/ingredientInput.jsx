import React, { useState } from 'react';

function IngredientInput({ onSearch }) {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter ingredients (e.g., chicken, pasta, tomato)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit" className="btn btn-primary btn-lg">
          Find Recipes
        </button>
      </div>
    </form>
  );
}

export default IngredientInput;