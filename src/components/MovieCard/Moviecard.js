import React from 'react';
import classes from './Moviecard.module.css';

const moviecard = (props) => {

        let movieMedia = (<div>
            <img src= {"https://image.tmdb.org/t/p/w780/" + props.backdrop} alt="poster image"/>
            <span> <button onClick={props.click}> Play Trailer</button></span>
            </div>)

        if(props.activetrailer){ 
            movieMedia = (
                    <div>
                            <iframe width="100%" height="400px"
                            src={"https://www.youtube.com/embed/" + props.activetrailer}>
                    </iframe>
                    <span> <button onClick={props.closeTrailer}> close Trailer</button></span>

                    </div>
                    
                    )
                    
        }

        let genre = props.genre;
        let genreArray = [];
        for (let index = 0; index < genre.length; index++) { 
            genreArray.push(genre[index].name); 
        } 
        return (<div>
            <div className={classes.Moviecard}>
                <div className={classes.Poster}>
                    {movieMedia}
                </div>
                
                <div className={classes.Details}>
                    <div>
                        <span className={classes.Name , classes.red}>{props.name}  </span>
                        <span>{props.tagline}</span>
                    </div>
                    <div>
                        <span className={classes.text}>score : {props.score}</span><br/>
                        {/* <span>Heart Icon fav</span>
                        <span> watchlist icon </span>
                        <span>Star Icon</span> */}
                    </div>
                    <div className={classes.Overview}>
                        Overview : <br /> {props.overview}
                    </div>
                    <div className={classes.Facts}>
                        <div className={classes.text}>Other Details: </div><br />
                        {props.arated ? <span>A Rated </span> : null} 
                        <span>Budget : ${props.budget}</span>
                        <span>Status : {props.status}</span>
                        <span>release date : {props.releasedate}</span>
                        <span> Runtime : {props.runtime} mins</span>
                        {props.revenue ? <span>props.revenue</span> : null}
                        <span>Language : {props.language == "en" ? "English"  : props.language}</span>
                        <span>Genre : {genreArray.join(' - ')}</span>
                    </div>
                </div>
               
            </div>
        </div>)
    

    return (<div>
        <div>
            <button onClick={props.closeTrailer}>close</button>
        </div>
    </div>)
    
}

export default moviecard ;