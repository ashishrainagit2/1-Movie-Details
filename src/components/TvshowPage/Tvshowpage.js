import React from 'react';

const tvshowpage =  (props) => {
    console.log(props.details)
    return (
        <div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.details.poster_path} alt=""/>
            </div>

            <div>
                Details:
                <span>original_name :  {props.details.riginal_name}</span> <br />
                <span>overview  : {props.details.overview}</span> <br />
                <span> popularity : {props.details.popularity}</span> <br />
                <span> number_of_seasons : {props.details.number_of_seasons}</span> <br />
                <span> origin_country : {props.details.origin_country}</span> <br />
                <span> status : {props.details.status}</span> <br />
                <span> vote_average : {props.details.vote_average}</span> <br />
                <span> vote_count : {props.details.vote_count}</span> <br />
                <span> status : {props.details.status}</span> <br />
                <span> last_air_date : {props.details.last_air_date}</span> <br />
                <span> in_production : {props.details.in_production}</span> <br />
                <span> homepage : {props.details.homepage}</span> <br />
                <span> first_air_date : {props.details.first_air_date}</span> <br />
                <span> episode_run_time : {props.details.episode_run_time}</span>
            </div>
            
        </div>
    )
}

export default tvshowpage ;