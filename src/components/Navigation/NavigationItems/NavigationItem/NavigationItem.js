import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem} >
        <a 
        to={props.link}>{props.children}
        </a>
    </li>
);

export default navigationItem;