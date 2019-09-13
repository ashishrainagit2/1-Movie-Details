import React , {useState, useEffect , useRef ,useContext} from 'react';
import classes from './Favouritelist.module.css';

const favouritelist = props => {
    return (
        <div className={classes.Watchlist}>
             <p >This is Favourite List</p>
        </div>
       
    )
}

export default React.memo(favouritelist);
