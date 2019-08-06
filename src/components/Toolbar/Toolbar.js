import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Searchbar from '../SearchBar/SearchBar';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.logo}>
            <Logo />
        </div>
        <nav className={classes.menubar}>
            <NavigationItems />
        </nav >
        <div className="searchbar">
            <Searchbar />
        </div>  
    </header>
)
export default toolbar;