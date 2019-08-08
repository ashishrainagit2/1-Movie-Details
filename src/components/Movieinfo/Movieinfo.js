import React from 'react';
import classes from './Movieinfo.module.css'

const movieinfo = (props) => {
        let Moviebox = <p>Loading ...</p>;
        if(props.list != null ) {
             Moviebox =  (props.list).map((value, i) => {
                return (
                    <div key={i} className={classes.Movieinfo}>
                        <img src={ "https://image.tmdb.org/t/p/w300/" + value.poster_path} alt={value.title}/>
                        <p >{value.title}</p>
                    </div>
                    // <div key={i}>{value.title}</div>
                )
            })
        }
        return (
            <React.Fragment>
                { Moviebox } 
            </React.Fragment>
        )
    }

export default movieinfo;