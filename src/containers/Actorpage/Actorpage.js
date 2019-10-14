import React , {Component }from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ActorDetails from '../../components/ActorDetails/ActorDetails';


class Actorpage extends Component {

    componentDidMount(){
        let pathArray = window.location.pathname.split('/');
        this.props.getActorDetails(pathArray[2]);
    }
    render(){
        return (<div> 
                <ActorDetails details={this.props.actorid}/>
            </div>)
    }
}


const mapStateToProps = state => {
    return {
        actorid: state.actorpage.actorid
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getActorDetails: (no) => dispatch(actions.getActorDetails(no))
    }
}

export  default connect(mapStateToProps , mapDispatchToProps)(Actorpage);
