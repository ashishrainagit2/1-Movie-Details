import React , {Component} from 'react';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Movieinfo from '../../components/Movieinfo/Movieinfo';
import classes from './Movielist.module.css';
import Modal from '../../components/UIcomponents/Modal/Modal';
import Filter from '../../components/Filter/Filter';


class Movielist extends Component {

    componentDidMount () {
        this.props.onInitMovielist(this.props.pageNumber);
        // this.props.scrollListner(this.props.pageNumber,this.props.totalPages,this.props.scrolling);
        window.addEventListener('scroll', (e) => {
            const lastElement = document.querySelector('header + div + div > div > div:last-child');
            const lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
            const pageOffset = window.pageYOffset + window.innerHeight;
            const bottonOffset = 40;
            if(pageOffset > lastElementOffset - bottonOffset){
                counter++;
                if(this.props.pageNumber == counter){
                    this.props.onInitMovielist(this.props.pageNumber);
                } else {
                    counter--;
                }
                
            }
        })
    } 

    render (){
        let modalContent = null;
        if(this.props.movielist != null){
             modalContent = (this.props.movielist).map((value, i) => {
                 if(this.props.activeMovie == value.id){
                    return (
                        <div className={classes.ModalContent}>
                            <div className={classes.ModalImage}>
                                <img src={ "https://image.tmdb.org/t/p/w400" + value.poster_path} alt={value.title}/>
                            </div>
                            <div className={classes.ModalInfo}>
                                <div className={classes.infoLine}>
                                        <span className={classes.ModalTitle}>Title: </span> 
                                        <span>{value.title}</span>
                                </div>
                                <div className={classes.infoLine}>
                                        <span className={classes.ModalTitle}>Vote Count:</span> 
                                        <span>{value.vote_count}</span>
                                </div>
                                <div className={classes.infoLine}>
                                        <span className={classes.ModalTitle}>Average Rating:</span> 
                                        <span>{value.vote_average}</span>
                                </div>
                                <div className={classes.infoLine}>
                                        <span className={classes.ModalTitle}>Popularity:</span> 
                                        <span>{value.popularity}</span>
                                </div>
                                <div className={classes.infoLine}>
                                        <span>{value.adult}</span>
                                </div>
                                <div className={classes.infoLine}>
                                        <span className={classes.ModalTitle}>Release Date: </span> 
                                        <span>{value.release_date}</span>
                                </div>
                                <div className={classes.infoLine}>
                                        <span className={classes.ModalTitle}>Overview:</span> 
                                        <div>{value.overview}</div>
                                </div>
                                <div className={classes.MoreInfo}>More Info</div>
                            </div>
                        </div>
                    )
                 }
                
            })
        }

        return (
            <React.Fragment>
                <div className={classes.filterWrapper}>
                        <Filter selectedFilter = {this.props.filter} onfilterApply={() => this.props.onFilterApplyHandler(e)}/>
                </div>
                <div className={classes.Movielist}>
                    <div className={classes.MovielistWrapper}>
                        <Modal show={this.props.modalStatus} modalClose={this.props.onClickMovieBox}>
                            {modalContent}
                        </Modal>
                        <Movieinfo list={this.props.movielist} moreInfo={ this.props.onClickMovieBox}/>
                        {/* <div className={classes.LoadMore}>
                            <span onClick={() => this.props.onInitMovielist(this.props.page)}>Load More ...</span>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

let counter = 0; 

const mapStateToProps = state => {
    return {
        movielist: state.movieList.Movielist,
        page : state.movieList.page,
        modalStatus : state.movieList.ModalStatus,
        activeMovie : state.movieList.activeMovie,
        pageNumber : state.movieList.pageNumber,
        totalPages : state.movieList.totalPages,
        scrolling : state.movieList.scrolling,
        filter : state.movieList.ratingFilter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMovielist: (no) => dispatch(actions.initMovielist(no)),
        onClickMovieBox : (id) => dispatch(actions.getMoreMovieInfo(id)),
        onLoadMore : () => dispatch(actions.getMoreMovies()),
        onFilterApplyHandler : (e) => dispatch(actions.filterMovies(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
