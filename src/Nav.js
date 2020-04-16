import React from 'react';
import './App.css';
import { Navbar, NavItem, NavLink } from 'reactstrap';

function Nav() {
    return (
        <Navbar>
            <NavItem><NavLink className='nav-links' href="/">Home</NavLink></NavItem>
            <NavItem><NavLink className='nav-links' href="/breakfast">Breakfast</NavLink></NavItem>
            <NavItem><NavLink className='nav-links' href="/soupsalad">Soup and Salad</NavLink></NavItem>
            <NavItem><NavLink className='nav-links' href="/mainentree">Main Entrees</NavLink></NavItem>
            <NavItem><NavLink className='nav-links' href="/vegetarian">Vegetarian</NavLink></NavItem>
            <NavItem><NavLink className='nav-links' href="/dessert">Desserts</NavLink></NavItem>
        </Navbar>
    );
}

export default Nav;
