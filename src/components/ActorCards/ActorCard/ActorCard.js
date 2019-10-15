import React from 'react';
import Classes from './ActorCard.module.css';

const actorCard = (props) => (
    <span className={Classes.ActorCard}>
        <div className={Classes.ActorDetails}>
            <div className={Classes.PosterWrapper}>
                <img  
                    src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.imgPath  } 
                    onClick={() => props.toActorPage(props.key)}
                    onError={(e)=>{e.target.onerror = null; e.target.src="https://dummyimage.com/300x450/000/fff&text=Image+Missing!!!"}}
                    />
            </div>
            <div className={Classes.ActorDetails}>
                <div>{ props.name} </div>
                <div>Rating : {props.popularity}</div>
            </div>
        </div>
    </span>
)

export default actorCard;