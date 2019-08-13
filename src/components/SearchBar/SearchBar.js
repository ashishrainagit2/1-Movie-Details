import React from 'react';
import classes from './searchbar.module.css';

const searchbar = (props) => (
    <div className={classes.Searchbar}>
        <input type="text" placeholder="search..."/>
    </div>
)

export default searchbar;