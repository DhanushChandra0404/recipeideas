# Recipe Ideas

"Recipe Ideas" is a simple React web application that helps you find recipes based on the ingredients you have on hand. It fetches recipe data from TheMealDB API.

## Features

**Ingredient Input:** Enter a comma-separated list of ingredients.
**Recipe Search:** Fetches recipes matching your ingredients from TheMealDB.
**Card-based Display:** Recipes are shown as responsive cards with an image, name, and a link to the full recipe details on TheMealDB.
**Loading & Error States:** Provides clear feedback during data fetching and in case of errors.
**Responsive Design:** Utilizes Bootstrap for a modern, mobile-friendly layout.

## Technologies Used

-   React
-   Bootstrap 5
-   TheMealDB API

## Setup Instructions

To run this project locally, follow these steps:

1.  **create a new React app:**

    
    npx create vite@latest recipeideas --template react
    cd recipeideas
    

2.  **Write the code:**
    Write the contents of src/App.jsx, and create the src/components directory with IngredientInput.jsx, RecipeList.jsx, and RecipeCard.jsx.
    

3.  **Install dependencies (React is already installed with create-react-app):**
   npm i bootstrap react-bootstrap

4.  **Start the development server:**

    npm start
    

    The app will open in your browser, usually at `http://localhost:3000`.

## How to Use

1.  Enter one or more ingredients, separated by commas (e.g., chicken, pasta, tomato), into the input field.
2.  Click the "Find Recipes" button.
3.  Matching recipes will appear below as cards.
4.  Click "View Recipe" on any card to open the full recipe details on TheMealDB website in a new tab.

## API Reference

This application uses the following endpoint from TheMealDB API:

**Filter by Ingredients:** `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`

##  Project Workflow 
This project was developed with AI-assisted guidance to plan the solution, structure the app, and for better API usage.  
A detailed document of my AI approach is available here:  

 [RecipeIdeas_AI_Workflow.pdf](https://drive.google.com/file/d/15LUUGN44V94BBnWr_dQTCXESasui4JaJ/view?usp=drive_link) -  Project Workflow (Level 1)