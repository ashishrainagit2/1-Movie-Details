import  React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    console.log("props in modal" , props);
    let modal = null
    if (props.show) {
       modal =  <div
                className={classes.Modal}>
                {props.children}
            </div>
    } 

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.modalClose}/>
            {modal}
        </React.Fragment>
    )
}

export default modal;