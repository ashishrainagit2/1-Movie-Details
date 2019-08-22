import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/movies">MOVIES</NavigationItem>
        <NavigationItem link="/tv">TV SHOWS</NavigationItem>
    </ul>
)

export default navigationItems;