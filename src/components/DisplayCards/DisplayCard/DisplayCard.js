import React from 'react';
import classes from './DisplayCard.module.css';

const displayCard = (props) => {

    console.log('eee', props);
    return (
        <div key={props.id} className={classes.DisplayCards} onClick={(id) =>props.moreInfo(props.id)}>
            <div className={classes.DisplayContent}>
            <div className={classes.ImageWrapper}>
                <img src={ props.imagePath + props.posterPath} alt={props.title}/>
            </div>
            <div className={classes.DetailsWrapper}>
                <div>
                    {/* <p >{props.title}</p> */}
                    <div className={classes.Info1}>
                        <span className={classes.ReleaseDate}>Released On: {props.releaseDate}</span>
                        <span className={classes.AvgVote}>Avg Vote: {props.avgVote}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
    
}

export default displayCard;