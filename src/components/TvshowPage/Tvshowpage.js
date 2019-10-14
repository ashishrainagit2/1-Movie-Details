import React from 'react';
import classes from './Tvshowpage.module.css';

const tvshowpage =  (props) => {
    console.log(props.details)
    return (
        <div>
            <div className={classes.Tvshowpage}>
                <div className={classes.media}>
                    <img src={"https://image.tmdb.org/t/p/w342/" + props.details.poster_path} alt=""/>
                    {/* <button>Play Trailer</button> */}
                </div>

                <div className={classes.info}>
                    Details:<br />
                    <span><strong>Name: </strong> {props.details.original_name}</span> <br />
                    <span><strong>Overview  :</strong> {props.details.overview}</span> <br />
                    <span><strong>Popularity :</strong>  {props.details.popularity}</span> <br />
                    <span><strong>Seasons :</strong>  {props.details.number_of_seasons}</span> <br />
                    <span><strong>Country :</strong>  {props.details.origin_country}</span> <br />
                    <span><strong>Status : </strong> {props.details.status}</span> <br />
                    <span><strong>Rating :</strong>  {props.details.vote_average}</span> <br />
                    <span><strong>Vote Count :</strong>  {props.details.vote_count}</span> <br />
                    <span><strong>Last Aired :</strong>  {props.details.last_air_date}</span> <br />
                    <span><strong>Production Status :</strong>  {props.details.in_production}</span> <br />
                    <span><strong>Homepage : </strong> {props.details.homepage}</span> <br />
                    <span><strong>First Aired :</strong>  {props.details.first_air_date}</span> <br />
                    <span><strong> Episode Duration : </strong>{props.details.episode_run_time}</span>
                </div>
            </div>
        </div>
    )
}

export default tvshowpage ;