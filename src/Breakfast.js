import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class Breakfast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    console.log('Reading from database');

    let ref = firebase.database().ref('breakfast');
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

  render() {
    return (
      <div className="main">
        <header className="header">
          <h1>Breakfast Page!</h1>
        </header>
        <div className="body">
          <p>Hi from Breakfast.</p>
          {this.display()}
          {this.state.recipes.map((r, i) => (
            <p key={i.toString()}>{r.recipeName}</p>
          ))}
        </div>

      </div>
    );
  }
}

export default Breakfast;