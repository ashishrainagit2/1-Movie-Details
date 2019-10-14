import React  , { useState, useEffect }  from 'react';
import axios from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import TvshowPage from '../../components/TvshowPage/Tvshowpage'


const Tvshow = (props) => {
    const [TvShowState , TvShowStateStateHandler] = useState({
        TvshowPageStatus : false,
        hits : null,
        error : false
    }) 

    useEffect(() => {
        let id = window.location.pathname;
        id = id.split('/');
        let url = "https://api.themoviedb.org/3/tv/" + id[2] + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US"
        axios.get(url)
        .then(response => {
            TvShowStateStateHandler({
                TvshowPageStatus : true,
                hits : response.data,
                error : false
            })
        })
        .catch(error => {
            TvShowStateStateHandler(
                {
                ...TvShowState,
                error : true
                }
            )
        })
    }, [])

    return(
        <div>
            {TvShowState.TvshowPageStatus ? <TvshowPage details={TvShowState.hits}/> : <div>Loading...</div>}
        </div>
        
    )

}

export default withErrorHandler(Tvshow, axios);