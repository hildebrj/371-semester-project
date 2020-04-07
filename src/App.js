import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Breakfast from './Breakfast';
import SoupSalad from './SoupSalad';
import MainEntree from './MainEntree';
import Vegetarian from './Vegetarian';
import Dessert from './Dessert';

function App() {
    return (
        <div className="main">
            <Router>
                <div className="nav">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/breakfast" component={Breakfast} />
                        <Route path="/soupsalad" component={SoupSalad} />
                        <Route path="/mainentree" component={MainEntree} />
                        <Route path="/vegetarian" component={Vegetarian} />
                        <Route path="/dessert" component={Dessert} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
