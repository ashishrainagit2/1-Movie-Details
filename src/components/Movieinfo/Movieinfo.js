import React from 'react';
import classes from './Movieinfo.module.css'

const movieinfo = (props) => {
        let Moviebox = <p>Loading ...</p>;
        if(props.list != null ) {
             Moviebox =  (props.list).map((value, i) => {
                return ( 
                    <div key={value.id} className={classes.Movieinfo} onClick={(id) => props.moreInfo(value.id)}>
                        <div className={classes.ImageWrapper}>
                            <img src={ "https://image.tmdb.org/t/p/w300" + value.poster_path} alt={value.title}/>
                            <span></span>
                        </div>
                        <div className={classes.DetailsWrapper}>
                                <div>
                                    <p >{value.title}</p>
                                    <div className={classes.Info1}>
                                        <span className={classes.ReleaseDate}>Release Date : {value.release_date}</span>
                                        <span className={classes.AvgVote}>Avg Vote: {value.vote_average}</span>
                                    </div>
                                </div>
                        </div>
                    </div>
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