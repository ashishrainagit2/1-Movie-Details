import React , {Component} from 'react';
import classes from './Contactus.module.css';
import Spinner from '../../components/UIcomponents/Spinner/Spinner';
import Backdrop from '../../components/UIcomponents/Backdrop/Backdrop';

class Contactus extends Component {

    state = {
        orderForm : {
            // firstname,lastname, username, phone number , password, verify password, gender , address
            name : {

            }
        }
    }
    render (){
        return (
            <div>
                {/* <Spinner /> */}
                <Backdrop />
                <div>Contact us</div>

            </div>
            
        )
    }
}

export default Contactus;