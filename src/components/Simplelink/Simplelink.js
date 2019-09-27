import React from 'react';
import classes from './Simplelink.module.css';
import  {NavLink} from 'react-router-dom';

const simplelink =  (props) => (
    <div className={classes.Simplelink_wrapper}>
         <NavLink className={classes.Simplelink}
        to={"/" + props.name}>{props.name}
        </NavLink>
    </div>
       
)

export default simplelink;