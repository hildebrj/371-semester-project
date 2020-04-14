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
      const state = snapshot.val();
      this.setState(state);
      console.log(state);
    });
    //console.log(ref);
    //console.log(this.state);
  }

  render() {
    return (
      <div className="main">
        <header className="header">
          <h1>Breakfast Page!</h1>
        </header>
        <div className="body">
          <p>Hi from Breakfast.</p>
          
        </div>

      </div>
    );
  }
}

export default Breakfast;