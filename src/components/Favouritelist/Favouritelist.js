import React , {useState, useEffect , useRef ,useContext} from 'react';
import classes from './Favouritelist.module.css';
import propTypes from 'prop-types';

const favouritelist = props => {
    return (
        <div className={classes.Watchlist}>
             <p >{props.movienames}</p>
             <p >{props.movienames}</p>
             <p >{props.movienames}</p>
             <p >{props.movienames}</p>
             <p >{props.movienames}</p>
             <p >{props.movienames}</p>
        </div>
       
    )
}

favouritelist.propTypes = {
    movienames : propTypes.string
}

export default React.memo(favouritelist);
