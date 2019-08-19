import React , { Component} from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Movieinfo from '../../components/Movieinfo/Movieinfo';
import classes from './Tvshowlist.module.css';
import Modal from '../../components/UIcomponents/Modal/Modal';




class Tvshowlist extends Component {
            
        componentDidMount(){
            this.props.onInitTvShowList(this.props.pageNumber);  

            window.addEventListener('scroll', (e) => {
                const lastElement = document.querySelector('header + div > div > div:last-child');
                const lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
                const pageOffset = window.pageYOffset + window.innerHeight;
                const bottonOffset = 30;
                if(pageOffset > lastElementOffset - bottonOffset){
                    console.log("function for api called");
                    this.props.onInitTvShowList(this.props.pageNumber);
                }
            })
            
            
        }

        render (){
            let modalContent = null;
        if(this.props.tvShows != null){
             modalContent = (this.props.tvShows).map((value, i) => {
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
                <div className={classes.Movielist}>
                    <div className={classes.MovielistWrapper}>
                        <Modal show={this.props.modalStatus} modalClose={this.props.onClickTvBox}>
                            {modalContent}
                        </Modal>
                        <Movieinfo list={this.props.tvShows} moreInfo={ this.props.onClickTvBox}/>
                        {/* <div className={classes.LoadMore}>
                            <span onClick={() => this.props.onInitMovielist(this.props.page)}>Load More ...</span>
                        </div> */}
                    </div>
                </div>
            )
        }
}

const mapStateToProps = state => {
    return {
        pageNumber: state.tvShowList.pageNumber,
        totalPages: state.tvShowList.totalPages,
        tvShows: state.tvShowList.tvShows,
        modalStatus : state.tvShowList.ModalStatus,
        activeMovie : state.tvShowList.activeMovie
    }
}

const mapDispatchToState = dispatch => {
    return {
        onInitTvShowList : (no) => dispatch(actions.initTvShowList(no)),
        onClickTvBox : (id) => dispatch(actions.getMoreTvInfo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Tvshowlist);