import React , { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Homepage.module.css';
import Slider from '../../components/Slider/Slider';


const Homepage = (props) => {

   const [HomepageState , HomePageStateHandler] = useState({
        HomePageStatus : false,
        hits : []
    }) 

    useEffect(() => {
        async function fetchData(){
            const result = await axios(
                'https://api.themoviedb.org/3/trending/all/day?api_key=c18a8c63bee9d66665a486a624d48177',
            )
            HomePageStateHandler({
                HomePageStatus : true,
                hits : result.data.results
                })
            console.log("result data", result.data.results);
        }
        fetchData();
    }, [])


    // { HomepageState.hits.map((item) => (
    //     <div className={classes.Home}>
    //         <img src= {"https://image.tmdb.org/t/p/w342" + item.poster_path}  alt="Poster Image"/>
    //         <p>{item.original_title}</p>
    //     </div>
    // ))}

    const images =  HomepageState.hits.map((item, i) => (
            <img src={"https://image.tmdb.org/t/p/w342" + item.poster_path} /> 
    ))
    
    return (
       <div>
           <Slider>
                {images}
           </Slider>
            
       </div>
    )
}
export default Homepage;