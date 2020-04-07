import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="main">
      <header>
        <h2>Welcome to the Community Cookbook!</h2>
      </header>
      <div className="body">
        <p>Select a tab to view related recipes, or fill out the form below to create a new recipe.</p>

        <div className="form">
          <h3>Create a new recipe!</h3>

          <label>Recipe name: </label>
          <input type='text' maxLength='40' placeholder='Recipe Name' name='recipeName' />

          <label>Short description: </label>
          <textarea type='text' maxLength='100' placeholder='Description' name='recipeDescription' />

          <label>Number of servings: </label>
          <input type='number' min='1' max='25' name='recipeServings' />

          <label>Preparation time (mins): </label>
          <input type='number' min='1' max='180' name='recipePrepTime' />

          <label>Cook time (mins): </label>
          <input type='number' min='1' max='240' name='recipeCookTime' />

          <label>List of ingredients: </label>
          <input type='text' maxLength='40' placeholder='Ingredient' name='recipeIngredient1' />

          <label>Directions: </label>
          <textarea type='text' maxLength='400' placeholder='Directions' name='recipeDirections' />

          <label>Food category: </label>
          <select name='recipeCategory'>
            <option value='breakfast'>Breakfast</option>
            <option value='soupsalad'>Soup or Salad</option>
            <option value='mainentree'>Main Entree</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='dessert'>Dessert</option>
          </select>

          <button type='button' name='recipeSubmit'>Submit Recipe</button>
        </div>

      </div>

    </div>
  );
}

export default Home;
