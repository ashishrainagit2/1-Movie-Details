import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/popular">POPULAR</NavigationItem>
        <NavigationItem link="/favourites">FAVOURITES</NavigationItem>
    </ul>
)

export default navigationItems;