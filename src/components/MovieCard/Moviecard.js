import React from 'react';
import classes from './Moviecard.module.css';

const moviecard = (props) => {
    console.log("active trailer" , props.activetrailer)
    if(!props.activetrailer){
        return (<div>
            <div>
                <img src= {"https://image.tmdb.org/t/p/w1280/" + props.backdrop} alt="poster image"/>
                <div>
                    <span> <button onClick={props.click}> Play Trailer</button></span>
                    <span className={classes.Name}>{props.name} : {props.tagline}</span>
                </div>
                <div>
                    <span>score : {props.score}</span>
                    <span>Heart Icon fav</span>
                    <span> watchlist icon </span>
                    <span>Star Icon</span>
                </div>
                <div>
                    Overview : {props.overview}
                </div>
                <div className={classes.Facts}>
                    <div>Details</div>
                    <span>A rated : {props.arated}  </span>
                    <span>Budget : ${props.budget}</span>
                    <span>Status : </span>
                    <span>release date : {props.releasedate}</span>
                    <span> Runtime : {props.runtime}</span>
                    <span>Revenue : {props.revenue}</span>
                    <span>Language : {props.language}</span>
                    <span>Genre :</span>
                </div>
            </div>
            <div>
    
            </div>
        </div>)
    }

    return (<div>
        <iframe width="100%" height="400px"
                    src={"https://www.youtube.com/embed/" + props.activetrailer}>
        </iframe>
        <div>
            <button onClick={props.closeTrailer}>close</button>
        </div>
    </div>)
    
}

export default moviecard ;