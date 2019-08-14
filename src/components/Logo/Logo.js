import React from 'react';
import movielogo from '../../assets/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={movielogo} alt="Movie-logo" height="100"/>
    </div>
);

export default logo;