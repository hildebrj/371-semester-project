import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import {
  Container, Col, Card, CardText, Row, CardBody, CardSubtitle, CardHeader
} from 'reactstrap';

class Vegetarian extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    console.log('Reading from database');

    let ref = firebase.database().ref('vegetarian');
    ref.on('value', snapshot => {
      const s = snapshot.val();
      let recipeArray = [];
      for (let i in s) {
        recipeArray.push(s[i]);
      }
      this.setState({ recipes: recipeArray })
    });
  }

  createRecipeList = (num, rec) => {
    let ingList = [];
    for (let i = 1; i <= num; i++) {
      ingList.push(<CardSubtitle>{rec["recipeIngNum" + i]} {rec["ingredientMeasure" + i]} {rec["recipeIngredient" + i]}</CardSubtitle>);
    }
    return ingList;
  }

  render() {
    return (
      <div className="main">
        <Container>
          <header>Vegetarian Page!</header>
          <Row>
            <div className="body">
              {this.state.recipes.map((r, i) => (
                <Col><Card key={i}><CardBody>
                  <CardHeader tag='h4'>{r.recipeName}</CardHeader>
                  <CardText>{r.recipeDescription}</CardText>
                  <CardSubtitle>______________________________</CardSubtitle>
                  <CardSubtitle>Servings: {r.recipeServings}</CardSubtitle>
                  <CardSubtitle>Prep Time: {r.recipePrepTime} mins</CardSubtitle>
                  <CardSubtitle>Cook Time: {r.recipeCookTime} mins</CardSubtitle>
                  <CardSubtitle>______________________________</CardSubtitle>
                  <CardSubtitle>Ingredients ({r.recipeNumIngredients}):</CardSubtitle>
                  {this.createRecipeList(r.recipeNumIngredients, r)}
                  <CardSubtitle>______________________________</CardSubtitle>
                  <CardSubtitle>Directions:</CardSubtitle>
                  <CardText>{r.recipeDirections}</CardText>
                </CardBody></Card></Col>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Vegetarian;