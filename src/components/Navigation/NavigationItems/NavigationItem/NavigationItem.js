import React from 'react';
import classes from './NavigationItem.module.css';
import  {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
    <li className={classes.NavigationItem} >
        <NavLink className={classes.NavigationLink } activeClassName={classes.active}
        to={{
            pathname : props.link,
        }} 
        exact 
        activeStyle={{
            color: '#fa923f'
        }}
        >{props.children}
        </NavLink>
    </li>
);

export default navigationItem;