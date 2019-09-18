import React from 'react';
import classes from './ActorCards.module.css';
import ActorCard from './ActorCard/ActorCard';

const actorCards = (props) => {
    console.log("props this", props);
     return props.list.map((item , i) => (
                <ActorCard 
                    key={item.id} 
                    imgPath={item.profile_path} 
                    name={item.name} 
                    popularity={item.popularity}/>
        ))
}

export default actorCards;