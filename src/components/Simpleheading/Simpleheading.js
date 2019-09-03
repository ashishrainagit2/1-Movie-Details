import React from 'react';
import classes from './Simpleheading.module.css';

const simpleheading =  (props) => (
    <div className={classes.Simpleheading}>
        <h2>{props.name}</h2>
    </div>
)

export default simpleheading;