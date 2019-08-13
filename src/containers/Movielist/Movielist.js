import React , {Component} from 'react';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Movieinfo from '../../components/Movieinfo/Movieinfo';
import classes from './Movielist.module.css';
import Modal from '../../components/UIcomponents/Modal/Modal';


class Movielist extends Component {

    componentDidMount () {
        this.props.onInitMovielist();
    } 

    render (){
        console.log('movielist state' , this.props.movielist);
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
                            </div>
                        </div>
                    )
                 }
                
            })
        }

        return (
            <div className={classes.Movielist}>
                <div className={classes.MovielistWrapper}>
                    <Modal show={this.props.modalStatus} modalClose={this.props.onClickMovieBox}>
                        {modalContent}
                    </Modal>
                    <Movieinfo list={this.props.movielist} moreInfo={ this.props.onClickMovieBox}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movielist: state.movieList.Movielist,
        page : state.movieList.page,
        modalStatus : state.movieList.ModalStatus,
        activeMovie : state.movieList.activeMovie
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMovielist: () => dispatch(actions.initMovielist()),
        onClickMovieBox : (id) => dispatch(actions.getMoreMovieInfo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
