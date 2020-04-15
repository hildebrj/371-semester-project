import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class Breakfast extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    console.log('Reading from database');

    let ref = firebase.database().ref('breakfast');
    ref.on('value', snapshot => {
      const s = snapshot.val();

      //this.setState({ recipes: s });

      for (let i in s) {
        this.setState({ recipes: s[i] });
        //console.log(i);
        //console.log(s[i]);
      }
    });

    setTimeout(function () {
      console.log("State afterwards");
      console.log(this.state.recipes);
    }, 5000);
  }

  render() {
    setTimeout(function () { }, 3000);
    return (
      <div className="main">
        <header className="header">
          <h1>Breakfast Page!</h1>
        </header>
        <div className="body">
          <p>Hi from Breakfast.</p>
          {this.state && this.state.recipes !== null &&
            <p>"Hi"</p>
          }
        </div>

      </div>
    );
  }
}

export default Breakfast;