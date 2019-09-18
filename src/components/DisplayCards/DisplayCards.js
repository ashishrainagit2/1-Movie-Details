import React from 'react';
import classes from './DisplayCards.module.css'
import DisplayCard from './DisplayCard/DisplayCard';

const displayCards = (props) => {
    let imagePath = props.imagePath;
            let displayCard = <p>Loading ...</p>;
            if(props.list != null ) {
                displayCard =  (props.list).map((value, i) => {

                    return ( 
                        <DisplayCard 
                            imagePath={imagePath}
                            id={value.id} 
                            posterPath = {value.poster_path} 
                            title={value.title}
                            releaseDate={value.release_date ? value.release_date: value.first_air_date }
                            avgVote = {value.vote_average}
                        />
                    )
                })
            }
            return (
                <React.Fragment>
                    { displayCard } 
                </React.Fragment>
            )
        }

export default displayCards;