import React, { Component } from 'react';
import './App.css';

/** Class for the home page */
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeName: "",
      recipeDescription: "",
      recipeServings: "1",
      recipePrepTime: "10",
      recipeCookTime: "10",
      recipeIngNum1: 1,
      ingredientMeasure1: "",
      recipeIngredient1: "",
      recipeDirections: "",
      recipeCategory: "breakfast",
      recipeNumIngredients: 1
    }
  }

  /** Method submitting the form */
  submit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // Add validation
    // This is where call to FB goes.
  }

  /** Sets the input of the form to the state as it changes */
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /** Handles adding/removing add/remove ingredient buttons, sets num ingredients */
  ingredientBox = (event) => {
    event.preventDefault();
    let numVal = this.state.recipeNumIngredients;

    // Handling button click
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

    // Setting buttons to visible or not based on number of ingredients
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

  /** Checking number of ingredients returning if input should be hidden/visible */
  checkNumInput = (x) => {
    if (x <= this.state.recipeNumIngredients) {
      return 'text';
    } else {
      return 'hidden';
    }
  }

  /** Checking number of ingredients returning if input should be hidden/visible */
  checkNumNum = (x) => {
    if (x <= this.state.recipeNumIngredients) {
      return 'number';
    } else {
      return 'hidden';
    }
  }

  /** Render the home page */
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
            <input type='text' maxLength='40' placeholder='Recipe Name' name='recipeName' onChange={this.handleInputChange} className='normalIn' />

            <label>Short description: </label>
            <textarea type='text' maxLength='100' placeholder='Description' name='recipeDescription' onChange={this.handleInputChange} />

            <label>Number of servings: </label>
            <input type='number' min='1' max='25' defaultValue='1' name='recipeServings' onChange={this.handleInputChange} className='normalIn' />

            <label>Preparation time (mins): </label>
            <input type='number' min='1' max='180' defaultValue='10' name='recipePrepTime' onChange={this.handleInputChange} className='normalIn' />

            <label>Cook time (mins): </label>
            <input type='number' min='1' max='240' defaultValue='10' name='recipeCookTime' onChange={this.handleInputChange} className='normalIn' />

            <label>List of ingredients: </label>
            <div className='ingredientRow'>
              <input type='number' min='0' max='10' defaultValue='1' name='recipeIngNum1' onChange={this.handleInputChange} className='shortIn' />
              <input type='text' maxLength='10' placeholder='Measure' name='ingredientMeasure1' onChange={this.handleInputChange} className='medIn'/>
              <input type='text' maxLength='40' placeholder='Ingredient' name='recipeIngredient1' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(2)} min='0' max='10' defaultValue='1' name='recipeIngNum2' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(2)} maxLength='10' placeholder='Measure' name='ingredientMeasure2' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(2)} maxLength='40' placeholder='Ingredient' name='recipeIngredient2' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(3)} min='0' max='10' defaultValue='1' name='recipeIngNum3' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(3)} maxLength='10' placeholder='Measure' name='ingredientMeasure3' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(3)} maxLength='40' placeholder='Ingredient' name='recipeIngredient3' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(4)} min='0' max='10' defaultValue='1' name='recipeIngNum4' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(4)} maxLength='10' placeholder='Measure' name='ingredientMeasure4' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(4)} maxLength='40' placeholder='Ingredient' name='recipeIngredient4' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(5)} min='0' max='10' defaultValue='1' name='recipeIngNum5' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(5)} maxLength='10' placeholder='Measure' name='ingredientMeasure5' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(5)} maxLength='40' placeholder='Ingredient' name='recipeIngredient5' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(6)} min='0' max='10' defaultValue='1' name='recipeIngNum6' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(6)} maxLength='10' placeholder='Measure' name='ingredientMeasure6' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(6)} maxLength='40' placeholder='Ingredient' name='recipeIngredient6' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(7)} min='0' max='10' defaultValue='1' name='recipeIngNum7' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(7)} maxLength='10' placeholder='Measure' name='ingredientMeasure7' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(7)} maxLength='40' placeholder='Ingredient' name='recipeIngredient7' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(8)} min='0' max='10' defaultValue='1' name='recipeIngNum8' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(8)} maxLength='10' placeholder='Measure' name='ingredientMeasure8' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(8)} maxLength='40' placeholder='Ingredient' name='recipeIngredient8' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(9)} min='0' max='10' defaultValue='1' name='recipeIngNum9' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(9)} maxLength='10' placeholder='Measure' name='ingredientMeasure9' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(9)} maxLength='40' placeholder='Ingredient' name='recipeIngredient9' onChange={this.handleInputChange} className='normalIn' />
            </div>
            <div className='ingredientRow'>
              <input type={this.checkNumNum(10)} min='0' max='10' defaultValue='1' name='recipeIngNum10' onChange={this.handleInputChange} className='shortIn' />
              <input type={this.checkNumInput(10)} maxLength='10' placeholder='Measure' name='ingredientMeasure10' onChange={this.handleInputChange} className='medIn'/>
              <input type={this.checkNumInput(10)} maxLength='40' placeholder='Ingredient' name='recipeIngredient10' onChange={this.handleInputChange} className='normalIn' />
            </div>

            <button type='button' onClick={this.ingredientBox} id='addButton'>Add Ingredient</button>
            <button type='button' onClick={this.ingredientBox} id='removeButton' style={{ visibility: 'hidden' }}>Remove Ingredient</button>

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

      </div >
    );
  }
}

export default Home;
