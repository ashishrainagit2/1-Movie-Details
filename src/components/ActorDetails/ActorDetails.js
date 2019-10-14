import React from 'react';

const actorDetails = (props) => {

    
    if(props.details){
        console.log(">>>>>>>>" , props.details.profile_path)
        return  (
            <div>
                <span>
                    <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.details.profile_path} alt="actor"/>
                </span>
                <span>
                    <h1>Name: {props.details.name}</h1>
                    <p>About: {props.details.biography}</p>
                    <p>Birthday: {props.details.birthday}</p>
                    <p>Known for : {props.details.known_for_department}</p>
                    <p>Gender: {props.details.gender}</p>
                    <p>Place of birth : {props.details.place_of_birth}</p>
                </span>
            </div>
        )
    }

    return (
        <div>Loading........</div>
    )
   
}

export default actorDetails;