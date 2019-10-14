import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Moviecard  from'../../components/MovieCard/Moviecard';

 

class Moviepage extends Component {
     state = {
         id : null
     }

    componentDidMount () {
        let movieid = null;
        
        const query = new URLSearchParams( this.props.location.search );
        for ( let param of query.entries() ) {
           if (param[0] === "id"){
             movieid = +param[1]
           }
        }
        if(this.props.movieid){
            this.setState({id: this.props.movieid})
            this.props.getMovieDetails(this.props.movieid);
            
         } else {
            if(movieid){
                this.setState({id: movieid})
                this.props.getMovieDetails(movieid);
            }
         }
    } 

    render(){
        let moviepage = <p>Movie number : { this.state.id } </p>
        let movie = <p>Loading ...</p>;
            if(this.props.moviedetails != null){
                let movieinfo = this.props.moviedetails;
                movie = (<Moviecard 
                            backdrop={movieinfo.backdrop_path} 
                            name={movieinfo.original_title} 
                            score={movieinfo.vote_average}
                            overview = {movieinfo.overview}
                            tagline = {movieinfo.tagline}
                            arated = {movieinfo.adult ? "yes" : "no"}
                            budget={movieinfo.budget}
                            status={movieinfo.status}
                            releasedate={movieinfo.release_date}
                            runtime={movieinfo.runtime}
                            revenue={movieinfo.revenue}
                            language={movieinfo.original_language}
                            genre={movieinfo.genres}
                            click={(no) => this.props.getMovieTrailer(this.state.id)}
                            activetrailer = {this.props.activeTrailer}
                            closeTrailer = {this.props.closeTrailerHandler}
                        />)
            }
        
        return (
           <p>{movie}</p>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieid: state.moviepage.activeMovie,
        moviedetails : state.moviepage.moviedetails,
        activeTrailer : state.moviepage.activeTrailer
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetails: (no) => dispatch(actions.getMovieDetails(no)),
        getMovieTrailer : (no) => dispatch(actions.getMovieTrailer(no)),
        closeTrailerHandler: () => dispatch(actions.closeTrailer())
    }
}

export  default connect(mapStateToProps , mapDispatchToProps)(Moviepage);