import React , {Component} from 'react';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Movieinfo from '../../components/Movieinfo/Movieinfo';
import classes from './Movielist.module.css';

class Movielist extends Component {

    componentDidMount () {
        this.props.onInitMovielist();
    } 

    render (){
        return (
            <div className={classes.Movielist}>
                <div className={classes.MovielistWrapper}>
                    <Movieinfo list={this.props.movielist} onClick={() => {this.onClickMovieBox()}}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movielist: state.movieList.Movielist,
        page : state.movieList.page,
        modalStatus : state.movieList.ModalStatus
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMovielist: () => dispatch(actions.initMovielist()),
        onClickMovieBox : () => dispatch(actions.getMoreMovieInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
