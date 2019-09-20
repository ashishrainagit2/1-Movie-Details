import React , { Component} from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Movieinfo from '../../components/Movieinfo/Movieinfo';
import classes from './Tvshowlist.module.css';
import Modal from '../../components/UIcomponents/Modal/Modal';
import EventDisplayCards from '../../components/DisplayCards/EventDisplayCards/EventDisplayCards';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import EventModalContent from '../../components/ModalContent/EventModalContent';

class Tvshowlist extends Component {
    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props , state){
        return state;
    }

    scrollHandler(e){
            const lastElement = document.querySelector('header + div > div > div:last-child');
            console.log("last elemet is ", lastElement)
            if(lastElement != null){
                const lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
                const pageOffset = window.pageYOffset + window.innerHeight;
                const bottonOffset = 30;
                if((pageOffset > lastElementOffset - bottonOffset)){
                    counter++;
                    if(this.props.pageNumber === counter){
                        this.props.onInitTvShowList(this.props.pageNumber);
                    }else {
                        counter--;
                    }
                }
            }
    }

    componentDidMount(){
        this.props.onInitTvShowList(this.props.pageNumber);  
        window.addEventListener('scroll', (e) => this.scrollHandler())
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',(e) => this.scrollHandler())
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    
    componentDidUpdate() {
    }

    render (){
        let modalContent = null;
        if(this.props.tvShows != null){
            modalContent = (this.props.tvShows).map((value, i) => {
                if(this.props.activeMovie === value.id){
                    return (
                       <EventModalContent 
                       poster_path = {value.poster_path}
                       title = {value.title}
                       vote_count = {value.vote_count}
                       vote_average = {value.vote_average}
                       popularity = {value.popularity}
                       adult = {value.adult}
                       release_date = {value.release_date}
                       overview = {value.overview}
                       />
                    )
                }
                
            })
        }
        return (
            <div className={classes.Movielist}>
                <div className={classes.MovielistWrapper}>
                    <Modal show={this.props.modalStatus} modalClose={this.props.onClickTvBox}>
                        {modalContent}
                    </Modal>
                    { this.props.tvShows.length ? <EventDisplayCards list={this.props.tvShows} imagePath={"https://image.tmdb.org/t/p/w300"} moreInfo={ this.props.onClickTvBox}/> : <Spinner />}
                </div>
            </div>
        )
    }
}

let counter = 0; 

const mapStateToProps = state => {
    return {
        pageNumber: state.tvShowList.pageNumber,
        totalPages: state.tvShowList.totalPages,
        tvShows: state.tvShowList.tvShows,
        modalStatus : state.tvShowList.ModalStatus,
        activeMovie : state.tvShowList.activeMovie,
        loadingState: state.tvShowList.loadingState
    }
}

const mapDispatchToState = dispatch => {
    return {
        onInitTvShowList : (no) => dispatch(actions.initTvShowList(no)),
        onClickTvBox : (id) => dispatch(actions.getMoreTvInfo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Tvshowlist);