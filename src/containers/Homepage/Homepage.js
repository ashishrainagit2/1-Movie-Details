import React , { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCards from '../../components/DisplayCards/DisplayCards';
import ActorCards from '../../components/ActorCards/ActorCards';
import classes from './Homepage.module.css';

const Homepage = (props) => {
   const [HomepageState , HomePageStateHandler] = useState({
        HomePageStatus : false,
        hits : []
    }) 
    const [eventState , eventStateHandler] = useState({
        EventStatus : false,
        eventHits : []
    })
    const [personState , personStateHandler] = useState({
        personStatus : false,
        personHits : []
    })

    //Getting Trending Movies from Api and Storing them
    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/movie/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            HomePageStateHandler({
                HomePageStatus : true,
                hits : result.data.results.splice(0 , 4)
                })
        }
        fetchData();
    }, [])

    //Getting Trending TV shows from Api and Storing them
    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/tv/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            eventStateHandler({
                EventStatus : true,
                eventHits : result.data.results.splice(0 , 4)
                })
        }
        fetchData();
    } , [])

    //Getting Trending Personalities from Api and Storing them
    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/person/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            personStateHandler({
                personStatus : true,
                personHits : result.data.results
                })
        }
        fetchData();
    } , [])

    return (
       <div className={classes.Homepage}>

           <div className={classes.TrendingMovies}>
                <div className={classes.HeadingWrapper}>
                    <h2>Top Trending Movies Based On User Votes</h2>
                </div>
                 <DisplayCards list={HomepageState.hits} imagePath={"https://image.tmdb.org/t/p/w300"}/>
           </div>

            <div className={classes.TrendingEvents}>
                <div className={classes.HeadingWrapper}>
                    <h2> Top Trending Series Based On User Voting</h2>
                </div>
                <DisplayCards list={eventState.eventHits} imagePath={"https://image.tmdb.org/t/p/w300"}/>
            </div>

            <div className={classes.TrendingPersons}>
                <div className={classes.HeadingWrapper}>
                    <h2>Actors In LimeLight</h2>
                    <ActorCards list={personState.personHits}/>
                </div>
            </div>
       </div>
    )
}
export default Homepage;