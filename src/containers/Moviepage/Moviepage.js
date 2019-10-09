import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'


class Moviepage extends Component {

    componentDidMount () {
        // let movieid = 0;
        // const query = new URLSearchParams( this.props.location.search );
        // for ( let param of query.entries() ) {
        //    if (param[0] === "id"){
        //      movieid = param[1]
        //    }
        // }

        // if(movieid == 0 ){
        //     movieid = this.props.movieid
        // }

        // console.log("===", this.props.movieid);
        // if(this.props.movieid){
        //     this.props.getMovieDetails(movieid);
        //  }
    } 

    render(){
        let moviedetails = "Missing movie"
        if(this.props.movieid){
             moviedetails = this.props.movieid
        }
        return (

            <p>Movie number : { moviedetails } </p>

        )
    }
    
}

const mapStateToProps = state => {
    return {
        movieid: state.movieList.activeMovie
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetails: (no) => dispatch(actions.getMovieDetails(no))
    }
}

export  default connect(mapStateToProps , mapDispatchToProps)(Moviepage);