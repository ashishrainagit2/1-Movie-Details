import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/movies">MOVIES</NavigationItem>
        <NavigationItem link="/tv">TV SHOWS</NavigationItem>
        {props.isAuth ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Login</NavigationItem>
        }
        {props.isAuth ? <NavigationItem link="/Fav">Favourites</NavigationItem> : null }
        </ul>
    )
}

export default navigationItems;