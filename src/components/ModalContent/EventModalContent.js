import React from 'react';
import classes from './EventModalContent.module.css';
import {NavLink} from 'react-router-dom';

const movieModalContent = (props) => (
        <div className={classes.ModalContent}>
                <div className={classes.ModalImage}>
                        <img src={ "https://image.tmdb.org/t/p/w400" + props.poster_path} alt={props.title}/>
                </div>
                <div className={classes.ModalInfo}>
                        <div className={classes.infoLine}>
                                <span className={classes.ModalTitle}>Title: </span> 
                                <span>{props.title}</span>
                        </div>
                        <div className={classes.infoLine}>
                                <span className={classes.ModalTitle}>Vote Count:</span> 
                                <span>{props.vote_count}</span>
                        </div>
                        <div className={classes.infoLine}>
                                <span className={classes.ModalTitle}>Average Rating:</span> 
                                <span>{props.vote_average}</span>
                        </div>
                        <div className={classes.infoLine}>
                                <span className={classes.ModalTitle}>Popularity:</span> 
                                <span>{props.popularity}</span>
                        </div>
                        <div className={classes.infoLine}>
                                <span>{props.adult}</span>
                        </div>
                        <div className={classes.infoLine}>
                                <span className={classes.ModalTitle}>Release Date: </span> 
                                <span>{props.release_date}</span>
                        </div>
                        <div className={classes.infoLine}>
                                <span className={classes.ModalTitle}>Overview:</span> 
                                <div>{props.overview}</div>
                        </div>
                        <div className={classes.MoreInfo}>

                        <NavLink to={{
                             pathname : '/tvshow/' + props.id
                             }} exact > More Info</NavLink>
                        </div>
                </div>
         </div>
)

export default movieModalContent;