import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Searchbar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.logo}>
            <NavLink to={{
                pathname : '/'
            }}>
                <Logo />
            </NavLink>
        </div>
        <nav className={classes.menubar}>
            <NavigationItems isAuth={props.isAuth}/>
        </nav >
        <div className="searchbar">
            <Searchbar />
        </div>  
    </header>
)
export default toolbar;