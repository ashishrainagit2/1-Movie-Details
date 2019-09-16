import React , { PureComponent, Fragment } from 'react';
import classes from './Watchinglist.module.css';
import withClass from '../../hoc/withClass';


class Watchinglist extends PureComponent {

    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
      }

    render (){
        return (
            <div>
                <p>This is watching list</p>
                <p>Breaking Bad</p>
                <p>EOT</p>
                <p>Avengers</p>
                <input type="text"/><br />
                <input type="text" ref={this.inputElementRef}/>
                <input type="text"/>
            </div>
            
        )
    }
}

export default withClass(Watchinglist, classes.Watchlist);