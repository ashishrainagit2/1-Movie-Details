import React , {Component} from 'react';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

class Movielist extends Component {

    componentDidMount () {
        console.log("props==>" , this.props); 
        this.props.onInitIngredients();
    } 

    render (){
        return (
            <div>
                <h2>Movie List</h2>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        movielist: state.movieList.Movielist
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitIngredients: () => dispatch(actions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movielist);
