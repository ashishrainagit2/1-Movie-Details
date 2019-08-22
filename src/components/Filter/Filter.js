import React from 'react';
import { directive } from '@babel/types';
import classes from './Filter.module.css';

const filter = (props) => {
    let optionBox =  [];
    console.log(props);
    if(props.selectedFilter != null){
         optionBox = (props.selectedFilter).map( (value , i) => {
            return (
                <option value={value} key={i}> {value}</option> 
            )
        })
    }
    
    return  (
        <div className={classes.FilterWrapper}>
            <select onChange={props.onfilterApply()}>
                {optionBox}
            </select>
        </div>
    )
}

export default filter;