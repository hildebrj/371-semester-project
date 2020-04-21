import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class MainEntree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    console.log('Reading from database');

    let ref = firebase.database().ref('mainentree');
    ref.on('value', snapshot => {
      const s = snapshot.val();
      let recipeArray = [];
      for (let i in s) {
        recipeArray.push(s[i]);
      }
      this.setState({ recipes: recipeArray })
    });
  }

  display() {
    console.log("The current state:");
    console.log(this.state.recipes);
    if (this.state.recipes) {
      return this.state.recipes.recipeDescription;
    } else {
      return "<no recipes yet>"
    }
  }

  createRecipeList = (num, rec) => {
    let ingList = [];
    for (let i = 1; i <= num; i++) {
      ingList.push(<p>{rec["recipeIngNum" + i]} {rec["ingredientMeasure" + i]} {rec["recipeIngredient" + i]}</p>);
    }
    return ingList;
  }

  deleteRecipeListing = (event) => {
    console.log("deleting");

    let ref = firebase.database().ref('mainentree');
    let key;

    ref.on('value', snapshot => {
      const s = snapshot.val();

      for (let i in s) {
        if (s[i].recipeName === this.state.recipes[event.target.id].recipeName) {
          key = i;
        }
      }
    });

    ref = firebase.database().ref('mainentree').child(key).remove();
  }

  render() {
    return (
      <div className="main">
        <div className="centered">
          <header>Main Entree Page!</header>
          <section className="cards">
            {this.state.recipes.map((r, i) => (
              <article className="card" key={i}>
                <h3>{r.recipeName}</h3>
                <p>{r.recipeDescription}</p>
                <p>Servings: {r.recipeServings}</p>
                <p>Prep Time: {r.recipePrepTime} mins</p>
                <p>Cook Time: {r.recipeCookTime} mins</p>
                <p>Ingredients ({r.recipeNumIngredients}):</p>
                <p>{this.createRecipeList(r.recipeNumIngredients, r)}</p>
                <p>Directions:</p>
                <p>{r.recipeDirections}</p>
                <button id={i} onClick={this.deleteRecipeListing}>Delete</button>
              </article>
            ))}
          </section>
        </div>
      </div >
    );
  }
}

export default MainEntree;