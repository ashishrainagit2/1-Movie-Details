import React from 'react';
import Classes from './ActorCard.module.css';

const actorCard = (props) => (
    <span className={Classes.ActorCard}>
        <div className={Classes.ActorDetails}>
            <div className={Classes.PosterWrapper}>
                <img  src={"https://image.tmdb.org/t/p/w235_and_h235_face/" + props.imgPath  } />
            </div>
            <div className={Classes.ActorDetails}>
                <div>{ props.name} </div>
                <div>Rating : {props.popularity}</div>
            </div>
        </div>
    </span>
)

export default actorCard;