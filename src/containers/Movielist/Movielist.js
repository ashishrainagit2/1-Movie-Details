import React , {Component} from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import MovieDisplayCards from '../../components/DisplayCards/MovieDisplayCards/MovieDisplayCards';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import classes from './Movielist.module.css';
import Modal from '../../components/UIcomponents/Modal/Modal';
import Filter from '../../components/Filter/Filter';
import MoviesModalContent from '../../components/ModalContent/MovieModalContent';



class Movielist extends Component {

    componentDidMount () {
        this.props.onInitMovielist(this.props.pageNumber);
    } 

    render (){
        let modalContent = null;
        if(this.props.movielist != null){
             modalContent = (this.props.movielist).map((value, i) => {
                 if(this.props.activeMovie === value.id){
                    return (
                        <MoviesModalContent 
                        poster_path = {value.poster_path}
                        title={value.title}
                        vote_count = {value.vote_count}
                        vote_average = {value.vote_average}
                        popularity = {value.popularity}
                        adult = {value.adult}
                        release_date = {value.release_date}
                        overview = {value.overview}
                        id={value.id}
                        trailerClick = {(id) => this.props.trailerClickHandler(id)}
                        />
                    )
                 }
                
            })
        }

        if(this.props.trailerId){
             modalContent = (<div>
                 <div className={classes.closeModal}> 
                     <span onClick={this.props.onClickMovieBox}>Close</span>
                </div>
                <iframe width="100%" height="400px"
                    src={"https://www.youtube.com/embed/" + this.props.trailerId}>
                </iframe>
             </div> )
        }

        return (
            <React.Fragment>
                <div className={classes.filterWrapper}>
                        <Filter selectedFilters = {this.props.filter} onfilterApply={(event) => this.props.onFilterApplyHandler(event)} selected={this.props.selectedFilter}/>
                </div>
                <div className={classes.Movielist}>
                    <div className={classes.MovielistWrapper}>
                        <Modal show={this.props.modalStatus} modalClose={this.props.onClickMovieBox}>
                            {modalContent}
                        </Modal>

                        { this.props.movielist.length ? <MovieDisplayCards list={this.props.movielist} imagePath={"https://image.tmdb.org/t/p/w300"} moreInfo={ this.props.onClickMovieBox} /> : <Spinner />}

                        <div className={classes.LoadMore}>
                            <span onClick={() => this.props.onInitMovielist(this.props.pageNumber)}>Load More</span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        movielist: state.movieList.Movielist,
        page : state.movieList.page,
        modalStatus : state.movieList.ModalStatus,
        activeMovie : state.movieList.activeMovie,
        pageNumber : state.movieList.pageNumber,
        totalPages : state.movieList.totalPages,
        scrolling : state.movieList.scrolling,
        filter : state.movieList.ratingFilter,
        selectedFilter : state.movieList.selectedFilter,
        trailerId : state.movieList.trailerId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMovielist: (no) => dispatch(actions.initMovielist(no)),
        onClickMovieBox : (id) => dispatch(actions.getMoreMovieInfo(id)),
        onLoadMore : () => dispatch(actions.getMoreMovies()),
        onFilterApplyHandler : (event) => dispatch(actions.filterMovies(event)),
        trailerClickHandler : (id) => dispatch(actions.trailerClicked(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
