import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from '../../components/Slider/Slider';

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

    useEffect(() => {
        console.log("[Homepage] useEffect");
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/person/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            personStateHandler({
                personStatus : true,
                personHits : result.data.results
                })
            console.log("result data3", result.data.results);
        }
        fetchData();
    } , [])

    
    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/tv/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            eventStateHandler({
                EventStatus : true,
                eventHits : result.data.results
                })
        }
        fetchData();
    } , [])

    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/movie/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            HomePageStateHandler({
                HomePageStatus : true,
                hits : result.data.results
                })
            // console.log("result data", result.data.results);
        }
        fetchData();
    }, [])

    const images =  HomepageState.hits.map((item, i) => (
            <img key={i} src={"https://image.tmdb.org/t/p/w342" + item.poster_path  } /> 
    ))

    const imagesTv =  eventState.eventHits.map((item, i) => (
        <img key={i} src={"https://image.tmdb.org/t/p/w342" + item.poster_path} /> 
    ))

    const imagesPerson =  personState.personHits.map((item, i) => (
        <img key={i} src={"https://image.tmdb.org/t/p/w342" + item.profile_path} /> 
    ))
    
    return (
       <div>
           <Slider>
                {images}
           </Slider>

           <Slider>
                {imagesTv}
           </Slider>

           <Slider>
                {imagesPerson}
           </Slider>
            
       </div>
    )
}
export default Homepage;