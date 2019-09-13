import React from 'react';
import classes from './Filter.module.css';

const filter = (props) => {
    let optionBox =  [];
    if(props.selectedFilters != null){
         optionBox = (props.selectedFilters).map( (value , i) => {
            return (
                <option value={value} key={i} selected={props.selected === value}  > {value}</option> 
            )
        })
    }
    
    return  (
        <div className={classes.FilterWrapper}>
            <select onChange={(event) => props.onfilterApply(event)}>
                {optionBox}
            </select>
        </div>
    )
}

export default filter;