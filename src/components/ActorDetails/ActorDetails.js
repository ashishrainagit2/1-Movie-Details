import React from 'react';
import classes from './ActorDetails.module.css';

const actorDetails = (props) => {

    if(props.details){
        console.log(">>>>>>>>" , props.details)
        return  (
            <div className={classes.ActorDetails}>
                <div className={classes.media}>
                    <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.details.profile_path} alt="actor"/>
                </div>
                <div className={classes.info}>
                    <h1>Name: {props.details.name}</h1>
                    <p>About: {props.details.biography}</p>
                    <p>Birthday: {props.details.birthday}</p>
                    <p>Known for : {props.details.known_for_department}</p>
                    <p>Gender: {props.details.gender == 2 ? "Male" : "female"}</p>
                    <p>Place of birth : {props.details.place_of_birth}</p>
                    <p>Popularity: {props.details.popularity}</p>
                </div>
            </div>
        )
    }

    return (
        <div>Loading........</div>
    )
   
}

export default actorDetails;