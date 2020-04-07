import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Breakfast from './Breakfast';

function App() {
    return (
        <div className="main">
            <Router>
                <div className="nav">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/breakfast" component={Breakfast} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
