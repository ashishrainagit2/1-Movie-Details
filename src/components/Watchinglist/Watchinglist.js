import React , { PureComponent } from 'react';
import classes from './Watchinglist.module.css';
import withClass from '../../hoc/withClass';

class Watchinglist extends PureComponent {
    render (){
        return (
            <p>This is watching list</p>
        )
    }
}

export default withClass(Watchinglist, classes.Watchlist);