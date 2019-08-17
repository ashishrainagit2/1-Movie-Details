import React , { Component} from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


class Tvshowlist extends Component {

        componentDidMount(){
            console.log('here');
            this.props.onInitTvShowList();    
        }

        render (){
            return (
                <p>Hello TV shows</p>
            )
        }
}

const mapStateToProps = state => {
    return {
        pageNumber: state.tvShowList.pageNumber,
        totalPages: state.tvShowList.totalPages,
        result: state.tvShowList.result
    }
}

const mapDispatchToState = dispatch => {
    return {
        onInitTvShowList : (no) => dispatch(actions.initTvShowList(no))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Tvshowlist);