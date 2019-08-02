import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.logo}>
            <Logo />
        </div>
        <nav className={classes.menubar}>
            <NavigationItems />
        </nav >
        <div className="searchbar">
            {/* <Searchbar /> */}
        </div>  
    </header>
)
export default toolbar;