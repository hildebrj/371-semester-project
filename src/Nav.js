import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'black',
        fontWeight: 'bold'
    }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to='/'><li>Home</li></Link>
                <Link style={navStyle} to='/breakfast'><li>Breakfast</li></Link>
                <Link style={navStyle} to='/soupsalad'><li>Soup and Salad</li></Link>
                <Link style={navStyle} to='/mainentree'><li>Main Entrees</li></Link>
                <Link style={navStyle} to='/vegetarian'><li>Vegetarian</li></Link>
                <Link style={navStyle} to='/dessert'><li>Desserts</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;
