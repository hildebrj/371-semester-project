import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeName: "",
      recipeDescription: "",
      recipeServings: "",
      recipePrepTime: "",
      recipeCookTime: "",
      recipeIngredient1: "",
      recipeDirections: "",
      recipeCategory: "breakfast",
      recipeNumIngredients: 1
    }
  }

  submit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // This is where call to FB goes.
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  ingredientBox = (event) => {
    event.preventDefault();
    let numVal = this.state.recipeNumIngredients;

    if (event.target.id === 'addButton') {
      this.setState({
        recipeNumIngredients: this.state.recipeNumIngredients + 1
      });
      numVal += 1;
    } else {
      this.setState({
        recipeNumIngredients: this.state.recipeNumIngredients - 1
      });
      numVal -= 1;
    }

    if (numVal > 1) {
      document.getElementById('removeButton').style.visibility = 'visible';
    } else {
      document.getElementById('removeButton').style.visibility = 'hidden';
    }

    if (numVal < 10) {
      document.getElementById('addButton').style.visibility = 'visible';
    } else {
      document.getElementById('addButton').style.visibility = 'hidden';
    }
  }

  checkRecipeNum = (x) => {
    if (x <= this.state.recipeNumIngredients) {
      return 'text';
    } else {
      return 'hidden';
    }
  }

  render() {
    return (
      <div className="main" >
        <header>
          <h2>Welcome to the Community Cookbook!</h2>
        </header>
        <div className="body">
          <p>Select a tab to view related recipes, or fill out the form below to create a new recipe.</p>

          <form onSubmit={this.submit}>
            <h3>Create a new recipe!</h3>

            <label>Recipe name: </label>
            <input type='text' maxLength='40' placeholder='Recipe Name' name='recipeName' onChange={this.handleInputChange} />

            <label>Short description: </label>
            <textarea type='text' maxLength='100' placeholder='Description' name='recipeDescription' onChange={this.handleInputChange} />

            <label>Number of servings: </label>
            <input type='number' min='1' max='25' name='recipeServings' onChange={this.handleInputChange} />

            <label>Preparation time (mins): </label>
            <input type='number' min='1' max='180' name='recipePrepTime' onChange={this.handleInputChange} />

            <label>Cook time (mins): </label>
            <input type='number' min='1' max='240' name='recipeCookTime' onChange={this.handleInputChange} />

            <label>List of ingredients: </label>
            <input type='text' maxLength='40' placeholder='Ingredient' name='recipeIngredient1' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(2)} maxLength='40' placeholder='Ingredient' name='recipeIngredient2' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(3)} maxLength='40' placeholder='Ingredient' name='recipeIngredient3' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(4)} maxLength='40' placeholder='Ingredient' name='recipeIngredient4' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(5)} maxLength='40' placeholder='Ingredient' name='recipeIngredient5' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(6)} maxLength='40' placeholder='Ingredient' name='recipeIngredient6' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(7)} maxLength='40' placeholder='Ingredient' name='recipeIngredient7' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(8)} maxLength='40' placeholder='Ingredient' name='recipeIngredient8' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(9)} maxLength='40' placeholder='Ingredient' name='recipeIngredient9' onChange={this.handleInputChange} />
            <input type={this.checkRecipeNum(10)} maxLength='40' placeholder='Ingredient' name='recipeIngredient10' onChange={this.handleInputChange} />

            <button type='button' onClick={this.ingredientBox} id='addButton'>Add Ingredient</button>
            <button type='button' onClick={this.ingredientBox} id='removeButton' style={{visibility:'hidden'}}>Remove Ingredient</button>

            <label>Directions: </label>
            <textarea type='text' maxLength='400' placeholder='Directions' name='recipeDirections' onChange={this.handleInputChange} />

            <label>Food category: </label>
            <select name='recipeCategory' onChange={this.handleInputChange}>
              <option value='breakfast'>Breakfast</option>
              <option value='soupsalad'>Soup or Salad</option>
              <option value='mainentree'>Main Entree</option>
              <option value='vegetarian'>Vegetarian</option>
              <option value='dessert'>Dessert</option>
            </select>

            <button type='submit' name='recipeSubmit'>Submit Recipe</button>
          </form>

        </div>

      </div>
    );
  }
}

export default Home;
