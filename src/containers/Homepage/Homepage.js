import React , { useState, useEffect } from 'react';
import axios from '../../axios-list';
import MovieDisplayCards from '../../components/DisplayCards/MovieDisplayCards/MovieDisplayCards';
import EventDisplayCards from '../../components/DisplayCards/EventDisplayCards/EventDisplayCards';
import ActorCards from '../../components/ActorCards/ActorCards';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Homepage.module.css';
import { Route , withRouter } from 'react-router-dom';

const Homepage = (props) => {
   const [HomepageState , HomePageStateHandler] = useState({
        HomePageStatus : false,
        hits : [],
        error : false
    }) 
    const [eventState , eventStateHandler] = useState({
        EventStatus : false,
        eventHits : [],
        error : false
    })
    const [personState , personStateHandler] = useState({
        personStatus : false,
        personHits : [],
        error : false
    })
    let spinnerForMovieCards ;
    let spinnerForEventCards ;
    let spinnerForActorCards ;

    //Getting Trending Movies from Api and Storing them
    useEffect(() => {
        axios.get('/movie/day?api_key=c18a8c63bee9d66665a486a624d48177')
        .then(response => {
            HomePageStateHandler({
                HomePageStatus : true,
                hits : response.data.results.splice(0 , 4),
                error : false
            })
        })
        .catch(error => {
            HomePageStateHandler(
                {
                ...HomepageState,
                error : true
                }
            )
        })
    }, [])

    //Getting Trending TV shows from Api and Storing them
    useEffect(() => {
        axios.get('/tv/day?api_key=c18a8c63bee9d66665a486a624d48177')
        .then(response => {
            eventStateHandler({
                EventStatus : true,
                eventHits : response.data.results.splice(0 , 4),
                error : false
            })
        })
        .catch(error => {
            eventStateHandler ({
                ...eventState,
                error : true
            })
        })
    } , [])

    //Getting Trending Personalities from Api and Storing them
    useEffect(() => {
        axios.get('/person/day?api_key=c18a8c63bee9d66665a486a624d48177')
        .then(response => {
            console.log("response is ", response)
            personStateHandler({
                personStatus : true,
                personHits : response.data.results,
                error : false
            })
        })
        .catch(error => {
            personStateHandler ({
                ...personState ,
                error : true
            })
        })
    } , [])

    spinnerForMovieCards = HomepageState.error ? <p> <strong>Images Cant be loaded at this time</strong> </p> : <Spinner />
    spinnerForEventCards = eventState.error ? <p> <strong>Images Cant be loaded at this time</strong> </p> : <Spinner />
    spinnerForActorCards = personState.error ? <p> <strong>Images Cant be loaded at this time </strong> </p> : <Spinner />
    console.log('spinnerForActorCards', spinnerForActorCards);


    const moreInfoOnClick = (type , id) => {
        console.log(type , id);
        props.history.push( '/home/' + type + '/' + id );
    }

    const actorPageRedirectHandler = (id) => {
        console.log(id);
        props.history.push( '/actor/' + id );
    }

    return (
       <div className={classes.Homepage}>
           <div className={classes.TrendingMovies}>
                <div className={classes.HeadingWrapper}>
                    <h2>Top Trending Movies in Theatre</h2>
                </div>
                {HomepageState.hits.length  ? <MovieDisplayCards list={HomepageState.hits} imagePath={"https://image.tmdb.org/t/p/w300"} moreInfo={(id) => moreInfoOnClick('movies' , id)}/> :  spinnerForMovieCards }

                <Route path={ '/home/movies/:id'} exact render={() => <p>Special Movie</p>} />
           </div>

            <div className={classes.TrendingEvents}>
                <div className={classes.HeadingWrapper}>
                    <h2> Top Trending Series on TV</h2>
                </div>
                {eventState.eventHits.length ? <EventDisplayCards list={eventState.eventHits} imagePath={"https://image.tmdb.org/t/p/w300"}  moreInfo={(id) => moreInfoOnClick('tv' , id)} /> : spinnerForEventCards }

                <Route path={ '/home/tv/:id'} exact render={() => <p>Special Events</p>} />
            </div>

            <div className={classes.TrendingPersons}>
                <div className={classes.HeadingWrapper}>
                    <h2>Actors In LimeLight</h2>
                   {
                       personState.personHits.length ?  <ActorCards list={personState.personHits} actorPageRedirect={(id) => actorPageRedirectHandler(id)}/> : spinnerForActorCards
                   }
                </div>
            </div>
       </div>
    )
}
export default withErrorHandler(Homepage, axios);