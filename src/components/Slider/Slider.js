import React from 'react';
import classes from './Slider.module.css'
import { directive } from '@babel/types';

const slider = (props) => {

    return (
        <div className={classes.Slider}>
            <div className={classes.Slide}>
                {props.children}
            </div> 
        </div>
    )
}

export default slider;